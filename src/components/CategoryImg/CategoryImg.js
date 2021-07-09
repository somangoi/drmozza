import React, { Component } from 'react';
import './CategoryImg.scss';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="categoryWrapper">
          <header className="shopHeader">
            <div className="headerDesc">
              <h1>All Product</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                vitae felis vel nisi condimentum egestas ac vitae lacus.
              </p>
            </div>
            <div className="headerPic">
              <img src="/images/shop/header1.jpeg" alt="all products" />
            </div>
          </header>
        </div>
      </div>
    );
  }
}
