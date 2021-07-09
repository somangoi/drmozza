import React, { Component } from 'react';
import './ItemGrid.scss';

export default class ItemGrid extends Component {
  render() {
    return (
      <>
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
              A deeply moisturizing cream that helps build & repair skin barrier
              while shielding from moisture loss.
            </span>
            <button className="addToBag" type="button">
              ADD TO BAG
            </button>
          </div>
          <div className="compareItem">
            <span>
              A deeply moisturizing cream that helps build & repair skin barrier
              while shielding from moisture loss.
            </span>
            <button className="addToBag" type="button">
              ADD TO BAG
            </button>
          </div>
          <div className="compareItem">
            <span>
              A deeply moisturizing cream that helps build & repair skin barrier
              while shielding from moisture loss.
            </span>
            <button className="addToBag" type="button">
              ADD TO BAG
            </button>
          </div>
        </div>
      </>
    );
  }
}
