import React, { Component } from 'react';
import './App.css';
import ElementForm from './Components/ElementForm/ElementForm';
import ElementList from './Components/ElementList/ElementList'
class App extends Component {
  
  render() {
    return (
      <div>
        <ElementForm />
        <ElementList />
      </div>
    );
  }
}


export default App;
