import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <div>
        <img src='' alt=''/>
        <div>{this.props.item.name}</div>
        <div>{this.props.item.time}</div>
        <div>{this.props.item.limit}</div>
        <div>预订须知</div>
        <button>购买</button>
        
      </div>
    );
  }
}

export default List;