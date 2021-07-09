import React, { Component } from 'react';
import './ProductDetail.scss';

export default class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      categoryList: [],
      imgList: [],
      select: 0,
      showDesc: false,
      product_name: '',
      optionList: [],
      summary: '',
      description: '',
      nutritionList: [],
      showMoreClicked: false,
    };
  }

  componentDidMount() {
    fetch('/data/productDetail.json')
      .then(res => res.json())
      .then(productDetail => {
        this.setState({
          categoryList: productDetail.RESULT.categories,
          imgList: productDetail.RESULT.image_urls,
          product_name: productDetail.RESULT.product_name,
          summary: productDetail.RESULT.summary,
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

  showMore = () => {
    this.setState({ showMoreClicked: !this.state.showMoreClicked });
  };

  render() {
    const {
      categoryList,
      imgList,
      select,
      product_name,
      summary,
      description,
      optionList,
      nutritionList,
      showDesc,
      showMoreClicked,
    } = this.state;

    return (
      <div className="detail">
        <nav className="detailNav">
          <span>
            Products /{' '}
            {categoryList.map(category => {
              return (
                <a href={'/products?category=' + category.id} key={category.id}>
                  <span>{category.name} </span>
                </a>
              );
            })}{' '}
            / {product_name}
          </span>
        </nav>
        <div className="productMain">
          <div className="productImgSection">
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
                    <span key={option.id} className="price">
                      <span>${option.price}</span>
                      <span> | {option.weight}g </span>
                    </span>
                  );
                })}
              </div>
              <div className="productTitle">
                <h1>{product_name}</h1>
              </div>
              <div className="productDescWrapper">
                <div className="summary">{summary}</div>
                <div
                  className={
                    showMoreClicked ? 'productDesc' : 'productDesc hide'
                  }
                >
                  {description}
                </div>
                <button className="showMore" onClick={this.showMore}>
                  {showMoreClicked ? 'Show Less' : 'Show More'}
                </button>
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
                <ul
                  className="descContent"
                  style={{
                    display: showDesc ? 'block' : 'none',
                  }}
                >
                  {nutritionList.map((nutrition, idx) => {
                    return (
                      <li key={idx} className="nutritionDetail">
                        <span>{Object.keys(nutrition)} : </span>
                        <span>{nutrition[Object.keys(nutrition)]}</span>
                      </li>
                    );
                  })}
                </ul>
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
