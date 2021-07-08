import React, { Component } from 'react';
import SideMenu from './SideMenu/SideMenu';
import './SideMenuList.scss';

class SideMenuList extends Component {
  render() {
    return (
      <div className="sideMenuBottom">
        <SideMenu />
      </div>
    );
  }
}

export default SideMenuList;
