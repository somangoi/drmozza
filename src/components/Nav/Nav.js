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
              Milk <i className="fa fa-angle-down"></i>
            </li>
            <li>
              Style <i className="fa fa-angle-down"></i>
            </li>
            <li>
              Countries <i className="fa fa-angle-down"></i>
            </li>
            <li>Bestseller</li>
          </ul>
          <ul className="navRight">
            <li>Search</li>
            <li>
              <i className="fa fa-shopping-bag"></i>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
