import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './Card.scss';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      optionBtn: false,
    };
  }

  btnHandler = () => {
    this.setState({
      optionBtn: !this.state.optionBtn,
    });
  };

  render() {
    const { thumbnail, name, option, score, id, hoverImage } = this.props;
    const { optionBtn } = this.state;
    return (
      <div className="cardContainer">
        <Link to={`/detail/${id}`}>
          <div className="cardImage">
            <img src={thumbnail} alt="productImg" className="thumbnailImage" />
            <img src={hoverImage} alt="productImg" className="hoverImage" />
          </div>
          <div className="cardTag">
            <div className="cheeseName">{name}</div>
            <div className="cheesePrice">${option[0].price}</div>
          </div>
          <div className="starRatings">
            <i className="fas fa-star" />
            <span>{score}</span>
          </div>
        </Link>
        <div className="btnWrapper">
          {option[1] ? (
            <div
              className={
                optionBtn ? 'btnOptionWrapper' : 'btnOptionWrapper hide'
              }
            >
              <button className="btnOption">{option[0].weight}g</button>
              <button className="btnOption">{option[1].weight}g</button>
            </div>
          ) : null}
          <button className="btnStatic" onClick={this.btnHandler}>
            {option[0].stocks > 0 ? 'ADD TO BAG' : 'SOLD OUT'}
          </button>
        </div>
      </div>
    );
  }
}
export default withRouter(Card);
