import React, { Component } from 'react';
import './Card.scss';

export default class Card extends Component {
  render() {
    return (
      <div className="cardContainer">
        <div className="cardImage">
          <img src="" alt="" />
        </div>
        <div className="cardTag">
          <div className="cheeseName">
            Engelberg Cheddar (PRE-ORDER ONLY; Earliest expected delivery is Fri
            9 Jul)
          </div>
          <div className="cheesePrice">$15</div>
        </div>
        <div className="starRatings" dataRate="3">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <button>ADD TO BAG</button>
      </div>
    );
  }
}
