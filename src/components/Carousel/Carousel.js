import React, { Component } from 'react';
import './Carousel.scss';

export default class Carousel extends Component {
  render() {
    return (
      <li className="carousel">
        <div className="carouselInner">
          <img alt="cheese" src={this.props.img} />
        </div>
      </li>
    );
  }
}
