import React, { Component } from 'react';
import { connect } from 'react-redux';

class ElementList extends Component {


  render() {
    let list = this.props.elements.map((element, index) => {
      return (
        <li key={index}>{element}</li>
      )
    })

    return (
      <div>
        <ul>
          {list}
        </ul>
        {this.props.first}
        {this.props.second}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    elements: state.elementList,
    first: state.reducerOne,
    second: state.reducerTwo
  }
}
export default connect(mapStateToProps)(ElementList);
