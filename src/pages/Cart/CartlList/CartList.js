import React, { Component } from 'react';
import { USDfomating } from '../../../Fomating';
import './CartList.scss';

class CartList extends Component {
  render() {
    const { product_name, thumbnail_image_url, price, quantity, weight } =
      this.props.cartList;

    return (
      <div className="cartlist">
        <div className="product">
          <img
            className="productImg"
            src={thumbnail_image_url}
            alt="productImg"
          />
          <div className="productName">
            {product_name}
            <div className="weight">{weight}g</div>
          </div>
        </div>
        <div className="price">{USDfomating(price)}</div>
        <div className="quantity">
          <div className="selector">
            <button
              className="quantityBtn"
              onClick={() => {
                this.props.handleDecrement(this.props.cartList);
              }}
            >
              <i className="fas fa-minus"></i>
            </button>
            <input
              className="productNumber"
              type="number"
              min="1"
              max="99"
              value={quantity}
              onChange={e =>
                this.props.quantityInput(e, this.props.idx, this.props.cartList)
              }
            />
            <button
              className="quantityBtn"
              onClick={() => {
                this.props.handleIncrement(this.props.cartList);
              }}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <button
            className="remove"
            onClick={() => {
              this.props.handleDelete(this.props.cartList);
            }}
          >
            Remove
          </button>
        </div>
        <div className="total">{USDfomating(price * quantity)}</div>
      </div>
    );
  }
}

export default CartList;
