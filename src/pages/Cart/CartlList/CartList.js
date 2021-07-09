import React, { Component } from 'react';
import './CartList.scss';

class CartList extends Component {
  handleIncrement = () => {
    this.props.handleIncrement(this.props.cartList);
  };

  handleDecrement = () => {
    this.props.handleDecrement(this.props.cartList);
  };

  handleDelete = () => {
    this.props.handleDelete(this.props.cartList);
  };

  render() {
    const { name, img, price, quantity } = this.props.cartList;
    return (
      <div className="cartlist">
        <div className="product">
          <img className="productImg" src={img} alt="productImg" />
          <div className="productName">{name}</div>
        </div>
        <div className="price">{this.props.currency(price)}</div>
        <div className="quantity">
          <div className="selector">
            <button className="quantityBtn" onClick={this.handleDecrement}>
              <i className="fas fa-minus"></i>
            </button>
            <input
              className="productNumber"
              type="text"
              onChange={this.quantityInput}
              value={quantity}
            />
            <button className="quantityBtn" onClick={this.handleIncrement}>
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <button className="remove" onClick={this.handleDelete}>
            Remove
          </button>
        </div>
        <div className="total">{this.props.currency(price * quantity)}</div>
      </div>
    );
  }
}

export default CartList;
