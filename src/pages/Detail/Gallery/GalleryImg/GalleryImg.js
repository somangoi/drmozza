import React, { Component } from 'react';
import './GalleryImg.scss';

export default class GalleryImg extends Component {
  render() {
    return (
      <li>
        <div className="galleryImg">
          <img src="/images/product.jpeg" alt="" />
        </div>
      </li>
    );
  }
}
