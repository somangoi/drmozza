import React, { Component } from 'react';
import './CardLarge.scss';

export default class CardLage extends Component {
  render() {
    return (
      <div className="cardLargeContainer">
        <div className="cardLargeImg">
          <img src="https://via.placeholder.com/640X640"></img>
        </div>
        <div className="cardLargeTitle">
          <h2>
            {this.props.title}THE TIKTOK SENSATION TO NEUTRALIZING REDNESS IS
            ONE EASY STEP!
          </h2>
        </div>
        <div className="cardLargeDescription">
          <span>
            {this.props.description}Our best-selling Cicapair™ Tiger Grass Color
            Correcting Treatment SPF 30 transforms from green-to-beige to
            neutralize redness. Infused with star ingredient, tiger grass, to
            provide instant relief to sensitive skin and irritation.
          </span>
        </div>
        <div className="productDetailLink">
          <span>{this.props.description}SHOP CICAPAIR™ NOW</span>
        </div>
      </div>
    );
  }
}
