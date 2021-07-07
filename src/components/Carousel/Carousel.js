import React, { Component } from 'react';
import './Carousel.scss';

export default class Carousel extends Component {
  render() {
    console.log(`this.props`, this.props);
    return (
      <div className="carousel">
        <div className="carouselInner">
          <img alt="cheese" src={this.props.img} />
        </div>
      </div>
    );
  }
}
