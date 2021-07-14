import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Gallery from './Gallery/Gallery';
import './ProductDetail.scss';

export default class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      showDesc: false,
      showMoreClicked: false,
      selected: true,
    };
  }

  showDesc = () => {
    this.setState({ showDesc: !this.state.showDesc });
  };

  showMore = () => {
    this.setState({ showMoreClicked: !this.state.showMoreClicked });
  };

  changeToOption1 = () => {
    this.setState({ selected: false });
  };

  changeToOption2 = () => {
    this.setState({ selected: true });
  };

  componentDidMount() {
    this.setState({
      selectedOption: this.props.optionList[0],
    });
  }

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
        {/* {isValidObject(optionList) && ( */}
        <>
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
                  <div
                    className={`productDesc ${showMoreClicked ? '' : 'hide'}`}
                  >
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
                      onClick={this.changeToOption1}
                    >
                      {optionList[0].weight}g
                    </button>
                    <button
                      className={selected ? 'optionBtn chosen' : 'optionBtn'}
                      onClick={this.changeToOption2}
                    >
                      {optionList[1].weight}g
                    </button>
                  </div>
                )}

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
                    className={`descContent ${
                      showDesc ? '' : 'descContentHide'
                    }`}
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
        </>
        {/* )} */}
      </div>
    );
  }
}
