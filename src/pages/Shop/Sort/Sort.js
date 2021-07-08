import React, { Component } from 'react';
import './Sort.scss';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sortSection">
        <div className="sortBlank"></div>
        <div className="sortContainer">
          <div className="sortWrap">
            <span className="sortText">SORT BY</span>
            <span className="sortBar">
              <select name="sort" className="sort">
                <option value="all">All</option>
                <option value="price-descending">Price, High to Low</option>
                <option value="price-descending">Price, Low to High</option>
              </select>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Sort;
