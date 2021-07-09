import React, { Component } from 'react';
import './CategoryImg.scss';

export default class CategoryImg extends Component {
  render() {
    const { categoryDesc, categoryTitle, categoryImg } = this.props;
    return (
      <div>
        <div className="categoryWrapper">
          <div className="categoryDesc">
            <h1>{categoryTitle}</h1>
            <p>{categoryDesc}</p>
          </div>
          <div className="categoryPic">
            <img src={categoryImg} alt="categoryImg" />
          </div>
        </div>
      </div>
    );
  }
}
