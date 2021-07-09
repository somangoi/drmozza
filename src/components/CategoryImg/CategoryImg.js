import React, { Component } from 'react';
import './CategoryImg.scss';

<<<<<<< HEAD
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
=======
export default class CategoryImg extends Component {
  render() {
    const { categoryDesc, categoryTitle, categoryImg } = this.props;
    return (
      <div>
        <div className="categoryWrapper">
          <div className="categoryDesc">
            <h1>{categoryTitle}</h1>
            <p>{categoryDesc}</p>
          </div>
          <div className="categoryPic">
            <img src={categoryImg} alt="categoryImg" />
          </div>
>>>>>>> master
        </div>
      </div>
    );
  }
}
