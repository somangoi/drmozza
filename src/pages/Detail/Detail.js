import React, { Component } from 'react';
import './Detail.scss';
import Nav from '../../components/Nav/Nav';

import Routine from './Routine/Routine';

export default class Detail extends Component {
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
      <>
        <Nav />
        <div className="detailBody">
          <div className="detailWrapper">
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
                                idx === this.state.select
                                  ? '3px solid black'
                                  : 'none',
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
                      src={this.state.imgList[select].url}
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
                    Complex to strengthen the skin barrier and shield from water
                    and moisture loss.
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
                      Liquid. Warm Ceramidin Cream with your hands and gently
                      press into your face for even better absorption.
                    </div>
                  </div>
                  <div className="moreDetail">
                    <button className="moreDetailBtn">MORE DETAIL</button>
                  </div>
                </div>
              </div>
            </div>
            <article className="productSub">
              <div className="productFuncWrapper">
                <div className="productFuncDetail">
                  <h2>DEEP MOISTURE FOR SERIOUSLY DRY CHEESE</h2>
                  <p>
                    Our collection of dry skin solutions is powered by 5-Cera
                    Complex to deliver deep moisture that restores and repairs
                    dry skin.
                  </p>
                </div>
                <div className="productFuncIconBox">
                  <div className="productFunc">
                    <div className="funcText">
                      <h3>FARM</h3>
                      <p>World Best Cheese Ever</p>
                    </div>
                    <i className="fas fa-tractor"></i>
                  </div>
                  <div className="productFunc">
                    <div className="funcText">
                      <h3>NATURE</h3>
                      <p>World Best Cheese Ever</p>
                    </div>
                    <i className="fas fa-tree"></i>
                  </div>
                  <div className="productFunc">
                    <div className="funcText">
                      <h3>FRESH CHEESE</h3>
                      <p>World Best Cheese Ever</p>
                    </div>
                    <i className="fas fa-cheese"></i>
                  </div>
                </div>
              </div>
              <div className="promotionImg">
                <img src="/images/product.jpeg" alt="" />
              </div>
              <Routine />
              <div className="categoryImg">
                {/* shop페이지 header 컴포넌트 삽입하기 */}
              </div>
              <div className="compareItemWrapper">
                <div className="compareItemGrid">
                  <div className="compareItem">
                    <h2>COMPARE SIMILAR PRODUCTS</h2>
                  </div>
                  <div className="compareItem">
                    <a href="">
                      <img
                        src="/images/product.jpeg"
                        alt=""
                        className="compareItemImg"
                      />
                    </a>
                  </div>
                  <div className="compareItem">
                    <a href="">
                      <img
                        src="/images/product.jpeg"
                        alt=""
                        className="compareItemImg"
                      />
                    </a>
                  </div>
                  <div className="compareItem">
                    <a href="">
                      <img
                        src="/images/product.jpeg"
                        alt=""
                        className="compareItemImg"
                      />
                    </a>
                  </div>
                  <div className="compareItem">
                    <h3>WHAT IT IS</h3>
                  </div>
                  <div className="compareItem">
                    <a href="">
                      <div className="compareItemNamePrice">
                        <span className="compareItemName">Goat Cheese</span>
                        <span className="compareItemPrice">$50</span>
                      </div>
                    </a>
                  </div>
                  <div className="compareItem">
                    <a href="">
                      <div className="compareItemNamePrice">
                        <span className="compareItemName">Goat Cheese</span>
                        <span className="compareItemPrice">$50</span>
                      </div>
                    </a>
                  </div>
                  <div className="compareItem">
                    <a href="">
                      <div className="compareItemNamePrice">
                        <span className="compareItemName">Goat Cheese</span>
                        <span className="compareItemPrice">$50</span>
                      </div>
                    </a>
                  </div>
                  <div className="compareItem">
                    <h3>WHAT IT DOES</h3>
                  </div>
                  <div className="compareItem">
                    <span>
                      A deeply moisturizing cream that helps build & repair skin
                      barrier while shielding from moisture loss.
                    </span>
                    <button className="addToBag" type="button">
                      ADD TO BAG
                    </button>
                  </div>
                  <div className="compareItem">
                    <span>
                      A deeply moisturizing cream that helps build & repair skin
                      barrier while shielding from moisture loss.
                    </span>
                    <button className="addToBag" type="button">
                      ADD TO BAG
                    </button>
                  </div>
                  <div className="compareItem">
                    <span>
                      A deeply moisturizing cream that helps build & repair skin
                      barrier while shielding from moisture loss.
                    </span>
                    <button className="addToBag" type="button">
                      ADD TO BAG
                    </button>
                  </div>
                </div>
              </div>
              <div className="reviewContainer">{/* 추가기능 */}</div>
            </article>
          </div>
        </div>
      </>
    );
  }
}
