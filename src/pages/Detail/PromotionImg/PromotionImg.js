import React, { Component } from 'react';
import './PromotionImg.scss';

export default class PromotionImg extends Component {
  render() {
    const { descriptionImage } = this.props;
    console.log(this.props);
    console.log(descriptionImage);
    return (
      <div>
        <div className="promotionImg">
          <img src={descriptionImage} alt="promotion" />
        </div>
      </div>
    );
  }
}
