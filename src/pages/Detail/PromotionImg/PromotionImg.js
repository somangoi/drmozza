import React, { Component } from 'react';
import './PromotionImg.scss';

export default class PromotionImg extends Component {
  render() {
    return (
      <div>
        <div className="promotionImg">
          <img src="/images/product.jpeg" alt="promotionImg" />
        </div>
      </div>
    );
  }
}
