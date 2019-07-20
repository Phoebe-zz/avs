import React, { Component } from 'react';
import '../styles/Footer.css'

class Footer extends Component {
  render() {
    return (
      <div>
        <div className='foot'>
          <div className='left'>
            <img src={require('../assets/icon_ticket_select.png') } alt=''/>
            <div className='word'>首页</div>
          </div>
          <div className='right'>
          <img src={require('../assets/icon_me.png') } alt=''/>
          <div className='word'>我的</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;