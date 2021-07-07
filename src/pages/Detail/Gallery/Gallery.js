import React, { Component } from 'react';
import GalleryImg from './GalleryImg/GalleryImg';
import './Gallery.scss';

export default class Gallery extends Component {
  render() {
    return (
      <ul>
        <GalleryImg />
        <GalleryImg />
        <GalleryImg />
        <GalleryImg />
      </ul>
    );
  }
}
