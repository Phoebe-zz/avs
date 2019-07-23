import React, { Component } from "react";
import Img1 from "../assets/111.jpg";
import Img2 from "../assets/222.jpg";
import "../styles/Itemsty.css";
class Item extends Component {
  render() {
    return (
      <div className="Item">
        <img src={this.props.item.id > 1 ? Img1 : Img2} alt="" />
        <div className="tem">{this.props.item.tem}</div>
        <div className="limit">{this.props.item.limi}</div>
        <div className="tui">{this.props.item.tui}</div>
        <div className="clear" />
        <div className="experiment">预订须知</div>
        <div className="pricetitle1">¥</div>
        <span className="price">{this.props.item.price}</span>
        <div className="pricetitle2">起</div>
        <button className='butt'>购买</button>
      </div>
    );
  }
}

export default Item;
