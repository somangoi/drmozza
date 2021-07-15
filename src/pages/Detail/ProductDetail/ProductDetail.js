import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CART_API } from '../../../config';
import Gallery from './Gallery/Gallery';
import './ProductDetail.scss';

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDesc: false,
      showMoreClicked: false,
      selected: false,
      selectedSize: props.optionList[0].option_id,
    };
  }

  showDesc = () => {
    this.setState({ showDesc: !this.state.showDesc });
  };

  showMore = () => {
    this.setState({ showMoreClicked: !this.state.showMoreClicked });
  };

  changeToOptionSmall = e => {
    this.setState({ selected: false, selectedSize: e.target.value });
  };

  changeToOptionBig = e => {
    this.setState({ selected: true, selectedSize: e.target.value });
  };

  addToCart = () => {
    this.state.selected
      ? this.setState({ selectedSize: this.props.optionList[1].option_id })
      : this.setState({ selectedSize: this.props.optionList[0].option_id });

    const requestOptions = {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        option_id: this.state.selectedSize,
      }),
    };
    alert(`${this.props.product_name}이 장바구니에 추가되었습니다.`);
    fetch(`${CART_API}`, requestOptions);
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

    const { showMoreClicked, showDesc, selected } = this.state;

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
                  <span>
                    {category.category_name.charAt(0).toUpperCase() +
                      category.category_name.slice(1)}{' '}
                  </span>
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
                <span className="price">
                  <span>
                    $
                    {selected && optionList.length > 1
                      ? optionList[1].price
                      : optionList[0].price}
                  </span>
                </span>
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
              {optionList.length > 1 && (
                <div className="optionBtnWrapper">
                  <button
                    className={selected ? 'optionBtn' : 'optionBtn chosen'}
                    onClick={this.changeToOptionSmall}
                    value={optionList[0].option_id}
                  >
                    {optionList[0].weight}g
                  </button>
                  <button
                    className={selected ? 'optionBtn chosen' : 'optionBtn'}
                    onClick={this.changeToOptionBig}
                    value={optionList[1].option_id}
                  >
                    {optionList[1].weight}g
                  </button>
                </div>
              )}

              <button
                className="addToBag"
                type="button"
                onClick={this.addToCart}
              >
                ADD TO CART
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
                  {nutritionList &&
                    nutritionList.map((nutrition, idx) => {
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
