import React, { Component } from 'react';
import itemButton from './item-detail/item-button'
import itemWord from './item-detail/item-word'
import itemArr from './item-detail/item.arr'

class Item extends Component {
  render() {
    return (
      <div className='item'>
      <itemWord/>
      <itemButton/>
      <itemArr />
      </div>
    );
  }
}

export default Item;