import React, { Component } from 'react';
import List from './itemlist'

class itemArr extends Component {
  render() {
    return(
      {items.map((item) =>{
          return(
              <List item={item}/>
          )
  }
}
  }
}
const items = [
  {id: 1,name  : '成人票',price :'120',time:'23：30之前可定明日', limit:'随时退'},
  {id: 2,name  : '学生票',price :'120',time:'23：30之前可定明日', limit:'随时退'}
]

export default itemArr;