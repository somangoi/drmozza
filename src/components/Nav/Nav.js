import React, { Component } from 'react';
import './Nav.scss';
export default class Nav extends Component {
  render() {
    return (
      <div className="navBox">
        <div className="navContainer">
          <div className="navLogo">Mr.Mozza+</div>
          <ul className="navList">
            <li>All</li>
            <li>
              MILK <i className="fa fa-angle-down"></i>
            </li>
            <li>
              STYLE <i className="fa fa-angle-down"></i>
            </li>
            <li>
              COUNTRIES <i className="fa fa-angle-down"></i>
            </li>
            <li>BESTSELLER</li>
          </ul>
          <ul className="navRight">
            <li>SEARCH</li>
            <li>
              <i className="fa fa-shopping-bag"></i>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
