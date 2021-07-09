import React, { Component } from 'react';
import './Card.scss';

export default class Card extends Component {
  render() {
    return (
      <div className="cardContainer">
        <div className="cardImage">
          <img src={this.props.thumbnail} alt="" />
        </div>
        <div className="cardTag">
          <div className="cheeseName">{this.props.name}</div>
          <div className="cheesePrice">{this.props.price}</div>
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
