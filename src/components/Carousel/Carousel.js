import React, { Component } from 'react';
import './Carousel.scss';

export default class Carousel extends Component {
  render() {
    const { img, title, description } = this.props;

    return (
      <li className="carousel">
        <div className="carouselInner">
          <div className="carouselTitle">
            <p>{title}</p>
            <span>{description}</span>
          </div>
          <img alt="cheese" src={img} />
        </div>
      </li>
    );
  }
}
