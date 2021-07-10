import React, { Component } from 'react';
import './Card.scss';

export default class Card extends Component {
  render() {
    console.log(this.props);
    const { thumbnail, hoverImg, stock, currntItem, name, option, rating } =
      this.props;
    return (
      <div className="cardContainer">
        <div className="cardImage">
          <img src={thumbnail} alt="productImg" />
        </div>
        <div className="cardTag">
          <div className="cheeseName">{name}</div>
          <div className="cheesePrice">{}</div>
        </div>
        <div className="starRatings">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <button>{stock > 0 ? 'ADD TO BAG' : 'SOLD OUT'}</button>
      </div>
    );
  }
}
