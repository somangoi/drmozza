import React, { Component } from 'react';
import './ProductDetail.scss';

export default class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      imgList: [],
      select: 0,
      showDesc: false,
    };
  }

  componentDidMount() {
    fetch('/data/productImages.json')
      .then(res => res.json())
      .then(imgData => {
        this.setState({
          imgList: imgData,
        });
      });
  }

  changeImg = idx => {
    this.setState({ select: idx });
    console.log(idx);
  };

  showDesc = () => {
    this.setState({ showDesc: !this.state.showDesc });
  };

  render() {
    const { imgList, select } = this.state;

    return (
      <div className="detail">
        <nav className="detailNav">
          <span>
            Products / <a href="#">Cheese</a> / Product Name
          </span>
        </nav>
        <div className="productMain">
          <div className="productImgSection">
            <ul className="gallery">
              {imgList.map((img, idx) => {
                return (
                  <li key={img.id} onClick={() => this.changeImg(idx)}>
                    <div className="galleryImg">
                      <img
                        src={img.url}
                        alt="cheese"
                        style={{
                          border:
                            idx === select
                              ? '2px solid black'
                              : '2px solid transparent',
                          width: '99%',
                          height: '99%',
                        }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="productImgContainer">
              {imgList.length > 0 && (
                <img
                  src={imgList[select].url}
                  alt="selected"
                  className="selectedImg"
                />
              )}
            </div>
          </div>
          <div className="productDescSection">
            <div className="productDescWrapper">
              <div className="productMainPrice">
                <span className="price">$48</span>
                <span> &nbsp; 1.69 oz/50 ml</span>
              </div>
              <div className="productTitle">
                <h1 className="productTitleH1">Goat Cheese</h1>
              </div>
              <div className="productDesc">
                Deeply moisturizing ceramidin cream supercharged with 5-Cera
                Complex to strengthen the skin barrier and shield from water and
                moisture loss.
              </div>
              <button className="addToBag" type="button">
                ADD TO BAG
              </button>
              <div className="descBox">
                <button
                  className="descTitleBtn"
                  type="button"
                  onClick={this.showDesc}
                >
                  <span className="descTitle">HOW TO USE</span>
                </button>
                <div
                  className="descContent"
                  style={{
                    display: this.state.showDesc ? 'block' : 'none',
                  }}
                >
                  For best results, use this cera cream after our Ceramidin
                  Liquid. Warm Ceramidin Cream with your hands and gently press
                  into your face for even better absorption.
                </div>
              </div>
              <div className="moreDetail">
                <button className="moreDetailBtn">MORE DETAIL</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
