import React, { Component } from 'react';
import Address from './Address/Address';
import Orderlist from './Orderlist/Orderlist';
import { USDfomating } from '../../Fomating';
import { CART_API, COUPON_API } from '../../config';
import './Order.scss';

class Order extends Component {
  state = {
    name: '',
    email: '',
    zip: '',
    address: '',
    coupon: '',
    discount_percent: 0,
    isDaumPost: false,
    cartList: [],
  };

  componentDidMount() {
    const requestOptions = {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
    };
    fetch(CART_API, requestOptions)
      .then(res => res.json())
      .then(data => {
        this.setState({
          cartList: data.results.carts,
        });
      });
  }

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

  sendCoupon = () => {
    const requestOptions = {
      method: 'GET',
    };
    const { coupon } = this.state;
    console.log(coupon);
    fetch(`${COUPON_API}/${coupon}`, requestOptions)
      .then(res => res.json())
      .then(data => {
        this.setState({
          discount_percent: data.results.discount_percent,
        });
      });
    console.log(this.state.discount_percent);
  };

  render() {
    const {
      name,
      email,
      zip,
      address,
      coupon,
      discount_percent,
      isDaumPost,
      cartList,
    } = this.state;
    const total = cartList
      .map(cart => cart.price * cart.quantity)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return (
      <>
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
              <div className="couponContain">
                <div className="couponArea">
                  <input
                    className="couponInput"
                    type="text"
                    name="coupon"
                    placeholder="Gift card or discount code"
                    onChange={this.handleInput}
                    value={coupon}
                  />
                  <button className="couponBtn" onClick={this.sendCoupon}>
                    APPLY
                  </button>
                </div>
              </div>
              <div className="shippingTotal">
                <div className="subTotalArea">
                  <div className="subTotalText">SUBTOTAL</div>
                  <div className="totalPrice">{USDfomating(total)}</div>
                </div>
                <div className="shippingArea">
                  <div className="shippingText">SHIPPING</div>
                  <div className="shippingPrice">Calculated at next step</div>
                </div>
              </div>
              <div className="finalPriceArea">
                <div className="finalTotal">TOTAL</div>
                <div className="finalPrice">
                  {USDfomating(total * (1 - discount_percent))}
                </div>
              </div>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Order;
