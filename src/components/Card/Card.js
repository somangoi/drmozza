import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './Card.scss';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      optionBtn: false,
      chooseSize: true,
    };
  }

  btnHandler = () => {
    this.setState({
      optionBtn: true,
    });
  };

  changeSize = () => {
    this.setState({
      chooseSize: !this.state.chooseSize,
    });
  };

  addToCart = () => {
    alert('take me home');
  };

  render() {
    const { thumbnail, name, option, score, id, hoverImage } = this.props;
    const { optionBtn, productOption, chooseSize } = this.state;
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
            <>
              <button
                className={optionBtn ? 'btnStatic hide' : 'btnStatic '}
                onClick={this.btnHandler}
              >
                CHOOSE SIZE
              </button>
            </>
          ) : (
            <>
              <button className="btnStatic">ADD TO CART</button>
            </>
          )}

          {optionBtn ? (
            <>
              <div
                className={
                  optionBtn ? 'btnOptionWrapper' : 'btnOptionWrapper hide'
                }
              >
                <button
                  className={chooseSize ? 'btnOption chosen' : 'btnOption '}
                  onClick={this.changeSize}
                >
                  {option[0].weight}g
                </button>
                <button
                  className={chooseSize ? 'btnOption ' : 'btnOption chosen'}
                  onClick={this.changeSize}
                >
                  {option[1].weight}g
                </button>
              </div>

              <button className="btnStatic" onClick={this.addToCart}>
                {optionBtn ? 'ADD TO CART' : 'CHOOSE SIZE'}
              </button>
            </>
          ) : (
            <></>
          )}

          {/* {option[0].stocks === 0 && option[1].stocks === 0 ? (
            <button className="btnStatic">SOLD OUT</button>
          ) : (
            <button className="btnStatic" onClick={this.btnHandler}>
              ADD TO BAG
            </button>
          )} */}
        </div>
      </div>
    );
  }
}
export default withRouter(Card);
