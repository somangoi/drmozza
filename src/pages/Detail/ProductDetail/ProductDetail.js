import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Gallery from './Gallery/Gallery';
import './ProductDetail.scss';

export default class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      showDesc: false,
      product_name: '',
      optionList: [],
      summary: '',
      description: '',
      nutritionList: [],
      showMoreClicked: false,
    };
  }

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
      product_name,
      summary,
      description,
      optionList,
      nutritionList,
    } = this.props;

    const { select, showMoreClicked, showDesc } = this.state;

    return (
      <div className="detail">
        <nav className="detailNav">
          <span>
            Products /{' '}
            {categoryList.map(category => {
              return (
                <Link
                  to={'/products?category=' + category.category_id}
                  key={category.category_id}
                >
                  <span>{category.category_name} </span>
                </Link>
              );
            })}{' '}
            / {product_name}
          </span>
        </nav>
        <div className="productMain">
          <div className="productImgSection">
            <Gallery imgList={imgList} />
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
                <div className={`productDesc ${showMoreClicked ? '' : 'hide'}`}>
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
                  <span className="descTitle">NUTRITION</span>
                </button>
                <ul
                  className={`descContent ${showDesc ? '' : 'descContentHide'}`}
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
