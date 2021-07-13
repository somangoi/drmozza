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
    return (
      <div className="cartForOrder">
        <div className="listTitle">CART LIST</div>
        <div className="shoppingList">
          <div className="OrderItemImg">
            <img
              className="itemImg"
              src="https://cdn11.bigcommerce.com/s-8hw6y8no/images/stencil/1280x1280/products/1263/2638/Product_Listing_Web_Cheese_Lapis_-_Front_20210401__49663.1618298725.jpg?c=2"
              alt="itemImg"
            />
            <div className="orderQuantity">1</div>
            <div className="orderItemName">Cheese Lapis</div>
            <div className="itemPrice">{this.currency(10)}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Orderlist;
