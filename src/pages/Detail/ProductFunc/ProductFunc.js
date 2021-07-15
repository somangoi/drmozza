import React, { Component } from 'react';
import './ProductFunc.scss';

export default class ProductFunc extends Component {
  render() {
    return (
      <div className="productFuncWrapper">
        <div className="productFuncDetail">
          <h2>DEEP MOISTURE FOR SERIOUSLY DRY CHEESE</h2>
          <p>
            Our collection of dry cheese solutions is powered by organic milk to
            deliver deep moisture that restores and repairs dry cheese.
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
    );
  }
}
