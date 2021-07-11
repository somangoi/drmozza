import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import './Order.scss';

class Order extends Component {
  state = {
    name: '',
    email: '',
    zip: '',
    address: '',
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, email, zip, address } = this.state;
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
                <label className="info">
                  FULL NAME
                  <span className="dot">*</span>
                </label>
                <input
                  className="orderInput"
                  type="text"
                  name="name"
                  placeholder="이름을 입력해주세요."
                  onChange={this.handleInput}
                  value={name}
                  onKeyPress={this.handleKeyPress}
                />
              </div>
              <div className="checkOutInput">
                <label className="info">
                  EMAIL
                  <span className="dot">*</span>
                </label>
                <input
                  className="orderInput"
                  type="text"
                  name="email"
                  placeholder="이메일을 입력해주세요."
                  onChange={this.handleInput}
                  value={email}
                  onKeyPress={this.handleKeyPress}
                />
              </div>
              <div className="checkOutInput">
                <label className="info">
                  ZIP CODE
                  <span className="dot">*</span>
                </label>
                <input
                  className="orderInput"
                  type="number"
                  placeholder="우편번호를 입력해주세요."
                  name="zip"
                  onChange={this.handleInput}
                  value={zip}
                  onKeyPress={this.handleKeyPress}
                />
              </div>
              <div className="checkOutInput">
                <label className="info">
                  ADDRESS
                  <span className="dot">*</span>
                </label>
                <input
                  className="orderInput"
                  type="text"
                  name="address"
                  placeholder="주소를 입력해주세요."
                  onChange={this.handleInput}
                  value={address}
                  onKeyPress={this.handleKeyPress}
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
            <div className="orderList">1234</div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Order;
