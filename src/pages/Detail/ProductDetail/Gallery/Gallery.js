import React, { Component } from 'react';
import './Gallery.scss';

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      select: 0,
    };
  }

  changeImg = idx => {
    this.setState({ select: idx });
  };

  render() {
    const { imgList } = this.props;
    const { select } = this.state;
    return (
      <>
        <ul className="gallery">
          {imgList
            ? imgList.map((img, idx) => {
                return (
                  <li key={idx} onClick={() => this.changeImg(idx)}>
                    <div className="galleryImgBox">
                      <img
                        src={img}
                        alt="cheese"
                        className={
                          idx === select ? 'galleryImg border' : 'galleryImg'
                        }
                      />
                    </div>
                  </li>
                );
              })
            : null}
        </ul>
        <div className="productImgContainer">
          {imgList ? (
            <img src={imgList[select]} alt="selected" className="selectedImg" />
          ) : null}
        </div>
      </>
    );
  }
}
