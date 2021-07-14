import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './CategoryImg.scss';

class CategoryImg extends Component {
  // componentDidMount() {
  //   const API = 'http://13.124.4.250:8000/';
  //   fetch(`${API}menus/${this.props.match.params.id}`)
  //     .then(res => res.json())
  //     .then(res => console.log(res));
  // }

  render() {
    const { currentCategory } = this.props;
    return (
      <div>
        <div className="categoryWrapper">
          <div className="categoryDesc">
            <h1>{currentCategory.category_name.toUpperCase()} CHEESE</h1>
            <p>{currentCategory.category_description}</p>
          </div>
          <div className="categoryPic">
            <img src={currentCategory.category_image_url} alt="categoryImg" />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CategoryImg);
