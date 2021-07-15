import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CART_API } from '../../config';
import { withRouter } from 'react-router';
import './Card.scss';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      optionBtn: false,
      selected: false,
      selectedSize: props.option[0].option_id,
    };
  }

  openOptionBtn = () => {
    this.setState({
      optionBtn: true,
    });
  };

  changeSmaller = () => {
    this.setState({
      selected: false,
    });
  };

  changeBigger = () => {
    this.setState({
      selected: true,
    });
  };

  addToCart = () => {
    this.state.selected
      ? this.setState({ selectedSize: this.props.option[1].option_id })
      : this.setState({ selectedSize: this.props.option[0].option_id });

    const requestOptions = {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        option_id: this.state.selectedSize,
      }),
    };
    fetch(`${CART_API}`, requestOptions);
    alert(`${this.props.name}이 장바구니에 추가되었습니다.`);
  };

  render() {
    const { thumbnail, name, option, score, id, hoverImg } = this.props;
    const { optionBtn, selected } = this.state;
    return (
      <div className="cardContainer">
        <Link to={`/detail/${id}`}>
          <div className="cardImage">
            <img src={thumbnail} alt="productImg" className="thumbnailImage" />
            <img src={hoverImg} alt="productImg" className="hoverImage" />
          </div>
          <div className="cardTag">
            <div className="cheeseName">{name}</div>
            <div className="cheesePrice">
              ${!selected ? option[0].price : option[1].price}
            </div>
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
                className={`btnStatic ${optionBtn ? 'hide' : ''}`}
                onClick={this.openOptionBtn}
              >
                CHOOSE SIZE
              </button>
            </>
          ) : (
            <>
              <button className="btnStatic" onClick={this.addToCart}>
                ADD TO CART
              </button>
            </>
          )}

          {optionBtn && (
            <>
              <div className={`btnOptionWrapper ${optionBtn ? '' : 'hide'}`}>
                <button
                  className={`btnOption ${selected ? '' : 'chosen'}`}
                  onClick={this.changeSmaller}
                  value={option[0].option_id}
                >
                  {option[0].weight}g
                </button>
                <button
                  className={`btnOption ${selected ? 'chosen' : ''}`}
                  onClick={this.changeBigger}
                  value={option[1].option_id}
                >
                  {option[1].weight}g
                </button>
              </div>
              <button className="btnStatic" onClick={this.addToCart}>
                {optionBtn ? 'ADD TO CART' : 'CHOOSE SIZE'}
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
}
export default withRouter(Card);
