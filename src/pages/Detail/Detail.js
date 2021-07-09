import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import ProductDetail from './ProductDetail/ProductDetail';
import ProductFunc from './ProductFunc/ProductFunc';
import Routine from './Routine/Routine';
import CategoryImg from '../../components/CategoryImg/CategoryImg';
import Footer from '../../components/Footer/Footer';

import './Detail.scss';

export default class Detail extends Component {
  constructor() {
    super();
    this.state = {
      showDesc: false,
    };
  }

  render() {
    return (
      <>
        <Nav />
        <div className="detailWrapper">
          <ProductDetail />
          <div className="detailBody">
            <article className="productSub">
              <div className="productFuncWrapper">
                <ProductFunc />
              </div>
              <div className="promotionImg">
                <img src="/images/product.jpeg" alt="" />
              </div>
              <Routine />
              <div className="categoryImg">
                <CategoryImg />
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
            </article>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
