import React, { Component } from 'react';
import '../Orderlist/Orderlist.scss';

class Orderlist extends Component {
  currency = number => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      currencySign: 'accounting',
      minimumFractionDigits: 2,
    }).format(number);
  };

  render() {
    const { product_name, thumbnail_image_url, price, quantity, weight } =
      this.props.cartList;
    return (
      <div className="cartForOrder">
        <div className="shoppingList">
          <div className="OrderItemImg">
            <img className="itemImg" src={thumbnail_image_url} alt="itemImg" />
            <div className="orderQuantity">{quantity}</div>
            <div className="orderItemName">
              {product_name}
              <div className="itemWeight">{weight}g</div>
            </div>
            <div className="itemPrice">{this.currency(price)}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Orderlist;
