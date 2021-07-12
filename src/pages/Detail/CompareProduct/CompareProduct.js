import React, { Component } from 'react';
import './CompareProduct.scss';

export default class CompareProduct extends Component {
  render() {
    const { compareList } = this.props;
    return (
      <div className="compareItemWrapper">
        <div className="compareItem">
          <div className="tableSubtitle tableColumn">
            <div className="tableRowImg">
              <h2>COMPARE SIMILAR PRODUCTS</h2>
            </div>
            <div className="tableRow2">
              <h3>WHAT IT IS</h3>
            </div>
            <div className="tableRow3">
              <h3>HOW IT TASTES</h3>
            </div>
          </div>
          {compareList.map((data, idx) => {
            return (
              <div key={idx} className="tableColumn">
                <div className="tableRowImg">
                  <img src={data.thumbmail_image} alt="productImg" />
                </div>
                <div className="tableRowName">
                  <div className="compareName">{data.product_name}</div>
                  <div className="comparePrice">${data.option[0].price}</div>
                </div>
                <div className="tableRowDesc">
                  <div className="compareDesc">{data.description}</div>
                </div>
                <div className="tableRowBtn">
                  <button>ADD TO BAG</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
