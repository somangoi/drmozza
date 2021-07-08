import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.scss';

class SideMenuBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sideMenuGroup">
        <h2 className="sideMenuTitle">
          <Link to="#sideMenuGroup1">
            <span>Type of Milk</span>
            <span className="sideMenuCaret">+</span>
          </Link>
        </h2>
        <ul className="sideMenuContent" id="sideMenuGroup1">
          <li>Cow's milk</li>
          <li>Sheep's milk</li>
          <li>Goat's milk</li>
        </ul>
      </div>
    );
  }
}

export default SideMenuBottom;
