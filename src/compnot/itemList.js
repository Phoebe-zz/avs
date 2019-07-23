import React, { Component } from "react";
import Item from "./Item";
import '../styles/Itemsty.css'

class ItemList extends Component {
  render() {
    return (
      <div className='ticket'>
        <div className='sign'/>
        <div className='buyticket'>购票</div>
        <div className='clea'></div>
      <div>
        {items.map((item, id) => (
          <Item key={id} item={item} />
        ))}
      </div>
      </div>
    );
  }
}
const items = [
  {
    
    id: "1",
    tem: "成人票",
    limi: "23：30之前可定明日",
    tui: "随时退",
    price: "120",
    dizhi:"../assets/111.jpg"
  },
  {
    id: "2",
    tem: "学生票",
    limi: "23：30之前可定明日",
    tui: "随时退",
    price: "120",
    dizhi:"../assets/222.jpg"
  },
];

export default ItemList;
