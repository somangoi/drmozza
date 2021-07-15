import React, { Component } from 'react';
import Address from './Address/Address';
import Orderlist from './Orderlist/Orderlist';
import { Link } from 'react-router-dom';
import { usdFomating } from '../../Fomating';
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
    discount_price: 0,
    isDaumPost: false,
    cartList: [],
    width: 395,
    height: 300,
    modalStyle: {
      position: 'absolute',
      top: '140px',
      left: '540px',
      zIndex: '1000',
      border: '1px solid #000000',
      overflow: 'hidden',
    },
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

  OpenPost = () => {
    this.setState({
      isDaumPost: true,
    });
  };

  setAddress = (allAddress, zoneCodes) => {
    this.setState({
      address: allAddress,
      zip: zoneCodes,
      isDaumPost: false,
    });
  };

  sendCoupon = () => {
    const { coupon } = this.state;
    fetch(`${COUPON_API}/${coupon}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          discount_price: data.results.discount_price,
          discount_percent: data.results.discount_percent,
        });
      });
  };

  render() {
    const {
      name,
      email,
      zip,
      address,
      coupon,
      discount_percent,
      discount_price,
      isDaumPost,
      cartList,
    } = this.state;
    const total = cartList
      .map(cart => cart.price * cart.quantity)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return (
      <div className="chekOutPage">
        <h1 className="checkOutTitle">CHECK OUT</h1>
        <div className="orderPage">
          <div className="checkOutContents">
            <div className="shippingInfo">SHIPPING ADDRESS</div>
            <div className="linkContain">
              Already have an account?
              <Link to="/Login" className="goToLogin">
                Login
              </Link>
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
                <button className="findZip" onClick={this.OpenPost}>
                  Find ZIP
                </button>
                {isDaumPost ? (
                  <Address
                    setAddress={this.setAddress}
                    isDaumPost={this.state.isDaumPost}
                    width={this.state.width}
                    height={this.state.height}
                    modalStyle={this.state.modalStyle}
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
              <Link to="/cart" className="goToCart">
                Return to cart
              </Link>
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
                <div className="totalPrice">{usdFomating(total)}</div>
              </div>
              <div className="shippingArea">
                <div className="shippingText">SHIPPING</div>
                <div className="shippingPrice">Calculated at next step</div>
              </div>
            </div>
            <div className="finalPriceArea">
              <div className="finalTotal">TOTAL</div>
              <div className="finalPrice">
                {usdFomating(total * (1 - discount_percent) - discount_price)}
              </div>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Order;
