import React, { Component } from 'react';
import './PromotionImg.scss';

export default class PromotionImg extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="promotionImg">
          <img src={this.props.discription_image} alt="promotionImg" />
        </div>
      </div>
    );
  }
}
