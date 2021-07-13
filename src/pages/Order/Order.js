import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Address from './Address/Address';
import Orderlist from './Orderlist/Orderlist';
import './Order.scss';

class Order extends Component {
  state = {
    name: '',
    email: '',
    zip: '',
    address: '',
    isDaumPost: false,
    cartList: [
      {
        product_name: 'Herb and Garlic Whirl',
        thumbnail_image_url:
          'https://cdn11.bigcommerce.com/s-8hw6y8no/images/stencil/1280x1280/products/1325/2916/Product_Listing_Web_Herb_and_Garlic_Whirl_Main_20210603__49071.1623115265.jpg?c=2',
        product_id: 4,
        option_id: 6,
        weight: 70,
        price: 47.16,
        quantity: 10,
        stocks: 54278,
        availability: true,
      },
    ],
  };

  currency = number => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      currencySign: 'accounting',
      minimumFractionDigits: 2,
    }).format(number);
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleOpenPost = () => {
    this.setState({
      isDaumPost: true,
    });
  };

  setAddress = (AllAddress, zoneCodes) => {
    this.setState({
      address: AllAddress,
      zip: zoneCodes,
      isDaumPost: false,
    });
  };

  render() {
    const { name, email, zip, address, isDaumPost, cartList } = this.state;
    const total = cartList
      .map(cart => cart.price * cart.quantity)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return (
      <>
        <Nav />
        <div className="chekOutPage">
          <h1 className="checkOutTitle">CHECK OUT</h1>
          <div className="orderPage">
            <div className="checkOutContents">
              <div className="shippingInfo">SHIPPING ADDRESS</div>
              <div className="linkContain">
                Already have an account?
                <a className="goToLogin" href="/Login">
                  Login
                </a>
              </div>
              <div className="checkOutInput">
                <label className="info">FULL NAME</label>
                <input
                  className="orderInput"
                  type="text"
                  name="name"
                  placeholder="이름을 입력해주세요."
                  onChange={this.handleInput}
                  value={name}
                />
              </div>
              <div className="checkOutInput">
                <label className="info">EMAIL</label>
                <input
                  className="orderInput"
                  type="text"
                  name="email"
                  placeholder="이메일을 입력해주세요."
                  onChange={this.handleInput}
                  value={email}
                />
              </div>
              <div className="checkOutInput">
                <label className="info">
                  ZIP CODE
                  <button className="findZip" onClick={this.handleOpenPost}>
                    Find ZIP
                  </button>
                  {isDaumPost ? (
                    <Address
                      setAddress={this.setAddress}
                      isDaumPost={this.state.isDaumPost}
                    />
                  ) : null}
                </label>
                <input
                  className="orderInput"
                  type="number"
                  placeholder="우편번호를 입력해주세요."
                  name="zip"
                  onChange={this.handleInput}
                  value={zip}
                />
              </div>
              <div className="checkOutInput">
                <label className="info">ADDRESS</label>
                <input
                  className="orderInput"
                  type="text"
                  name="address"
                  placeholder="주소를 입력해주세요."
                  onChange={this.handleInput}
                  value={address}
                />
              </div>
              <div className="btnLink">
                <a className="goToCart" href="/cart">
                  Return to cart
                </a>
                <button className="checkOutBtn" type="button">
                  <span className="btnText">PROCEED TO CHECKOUT</span>
                </button>
              </div>
            </div>
            <ul className="orderList">
              <div className="listTitle">CART LIST</div>
              {cartList.map((cartlist, idx) => {
                return (
                  <Orderlist
                    key={cartlist.option_id}
                    idx={idx}
                    cartList={cartlist}
                  />
                );
              })}
              <div className="shippingTotal">
                <div className="subTotalArea">
                  <div className="subTotalText">SUBTOTAL</div>
                  <div className="totalPrice">{this.currency(total)}</div>
                </div>
                <div className="shippingArea">
                  <div className="shippingText">SHIPPING</div>
                  <div className="shippingPrice">Calculated at next step</div>
                </div>
              </div>
              <div className="finalPriceArea">
                <div className="finalTotal">TOTAL</div>
                <div className="finalPrice">{this.currency(total)}</div>
              </div>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Order;
