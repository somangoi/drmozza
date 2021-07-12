import React, { Component } from 'react';

export default class Gallery extends Component {
  changeImg = idx => {
    this.setState({ select: idx });
  };

  render() {
    const { imgList, select } = this.props;
    return (
      <>
        <ul className="gallery">
          {imgList.map((img, idx) => {
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
          })}
        </ul>
        <div className="productImgContainer">
          {imgList.length > 0 && (
            <img src={imgList[select]} alt="selected" className="selectedImg" />
          )}
        </div>
      </>
    );
  }
}
