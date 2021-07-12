import React, { Component } from 'react';
import './Card.scss';

export default class Card extends Component {
  render() {
    const { thumbnail, name, price } = this.props;
    return (
      <div className="cardContainer">
        <div className="cardImage">
          <img src={thumbnail} alt="productThumbnail" />
        </div>
        <div className="cardTag">
          <div className="cheeseName">{name}</div>
          <div className="cheesePrice">${price}</div>
        </div>
        <div className="starRatings">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <button>ADD TO BAG</button>
      </div>
    );
  }
}
