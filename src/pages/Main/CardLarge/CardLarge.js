import React, { Component } from 'react';
import './CardLarge.scss';

export default class CardLage extends Component {
  render() {
    const { id, cardImage, title, description } = this.props;

    return (
      <div className="cardLargeContainer">
        <div className="cardLargeImg">
          <img alt="cardImage" src={cardImage} />
        </div>
        <div className="cardLargeTitle">
          <h2>{title}</h2>
        </div>
        <div className="cardLargeDescription">
          <span>{description}</span>
        </div>
        <div className="productDetailLink">
          <span>SHOP {title.toUpperCase()} NOW</span>
        </div>
      </div>
    );
  }
}
