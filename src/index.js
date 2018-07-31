import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//redux setup
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import logger from 'redux-logger'


const reducerOne = (state = 0, action) => {

    if (action.type === 'BUTTON_ONE') {
        state++
    } else if (action.type === 'BUTTON_TWO'){
        state--
    }
    return state ;
}

const reducerTwo = (state = 0, action) => {
    if (action.type === 'BUTTON_TWO') {
        state--
    }else if (action.type === 'BUTTON_ONE'){
        state++
    }
        return state;
    
   
}
const elementList = (state = [], action) =>{
    if( action.type === 'ADD_ELEMENT' ){
       return [...state, action.payload]
    } else if (action.type === 'CLEAR_ELEMENT'){
        state = []
   }
    return state

}

    const storeInstance = createStore(
        combineReducers({
            reducerOne,
            reducerTwo,
            elementList
        }),
        applyMiddleware(logger)
    )

    //wrapped APP with Provider
    ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
    registerServiceWorker();
