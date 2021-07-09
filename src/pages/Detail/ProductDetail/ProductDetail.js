import React, { Component } from 'react';
import './ProductDetail.scss';

export default class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      imgList: [],
      select: 0,
      showDesc: false,
      product_name: '',
      optionList: [],
      description: '',
      nutritionList: [],
    };
  }

  componentDidMount() {
    fetch('/data/productDetail.json')
      .then(res => res.json())
      .then(productDetail => {
        this.setState({
          imgList: productDetail.RESULT.image_urls,
          product_name: productDetail.RESULT.product_name,
          description: productDetail.RESULT.description,
          optionList: productDetail.RESULT.option,
          nutritionList: productDetail.RESULT.nutrition,
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
    const {
      imgList,
      select,
      product_name,
      description,
      optionList,
      nutrition,
    } = this.state;

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
                  <li key={idx} onClick={() => this.changeImg(idx)}>
                    <div className="galleryImg">
                      <img
                        src={img}
                        alt="cheese"
                        style={{
                          border:
                            idx === select
                              ? '2px solid black'
                              : '2px solid transparent',
                          width: '100%',
                          height: '100%',
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
                  src={imgList[select]}
                  alt="selected"
                  className="selectedImg"
                />
              )}
            </div>
          </div>
          <div className="productDescSection">
            <div className="productDescWrapper">
              <div className="productMainPrice">
                {optionList.map(option => {
                  return (
                    <>
                      <span key={option.id} className="price">
                        ${option.price}
                      </span>
                      <span> | {option.weight}g </span>
                    </>
                  );
                })}
              </div>
              <div className="productTitle">
                <h1 className="productTitleH1">{product_name}</h1>
              </div>
              <div className="productDesc">{description}</div>
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
                  {nutritionList.map(nutrition => {
                    return(
                      
                  })}
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
