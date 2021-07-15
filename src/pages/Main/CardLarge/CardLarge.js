import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './CardLarge.scss';

class CardLage extends Component {
  render() {
    const { id, cardImage, title, description } = this.props;

    return (
      <div className="cardLargeContainer">
        <div className="cardLargeImg">
          <img alt="cardImage" src={cardImage} />
        </div>
        <div className="cardLargeTitle">
          <h2>{title}</h2>
        </div>
        <div className="cardLargeDescription">
          <span>{description}</span>
        </div>
        <div className="productDetailLink">
          <Link to={`/shop/${id}`}>
            <span>SHOP {title.toUpperCase()} NOW</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(CardLage);
