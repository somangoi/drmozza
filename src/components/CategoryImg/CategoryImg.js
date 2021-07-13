import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './CategoryImg.scss';

class CategoryImg extends Component {
  render() {
    const { categoryList } = this.props;
    return (
      <div>
        <div className="categoryWrapper">
          <div className="categoryDesc">
            <h1>{categoryList.category_name.toUpperCase()} CHEESE</h1>
            <p>{categoryList.category_description}</p>
          </div>
          <div className="categoryPic">
            <img src={categoryList.category_image_url} alt="categoryImg" />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CategoryImg);
