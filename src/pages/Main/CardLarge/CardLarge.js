import React, { Component } from 'react';
import './CardLarge.scss';

export default class CardLage extends Component {
  render() {
    return (
      <div className="cardLargeContainer">
        <div className="cardLargeImg">
          <img alt="cardImage" src={this.props.cardImage} />
        </div>
        <div className="cardLargeTitle">
          <h2>{this.props.title}</h2>
        </div>
        <div className="cardLargeDescription">
          <span>{this.props.description}</span>
        </div>
        <div className="productDetailLink">
          <span>SHOP {this.props.title.toUpperCase()} NOW</span>
        </div>
      </div>
    );
  }
}
