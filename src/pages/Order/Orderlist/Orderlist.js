import React, { Component } from 'react';
import { formatToUSD } from '../../../Fomating';
import '../Orderlist/Orderlist.scss';

class Orderlist extends Component {
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
              <div class="productName">{product_name}</div>
              <div className="itemWeight">{weight}g</div>
            </div>
            <div className="itemPrice">{formatToUSD(price)}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Orderlist;
