import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import './Order.scss';

class Order extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    address: '',
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, email, password, address } = this.state;
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
                  className="userInput"
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
                  className="userInput"
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
                  PASSWORD
                  <span className="dot">*</span>
                </label>
                <input
                  className="userInput"
                  type="password"
                  placeholder="영문,숫자를 혼합하여 6~12자 이내"
                  name="password"
                  onChange={this.handleInput}
                  value={password}
                  onKeyPress={this.handleKeyPress}
                />
              </div>
              <div className="checkOutInput">
                <label className="info">
                  ADDRESS
                  <span className="dot">*</span>
                </label>
                <input
                  className="userInput"
                  type="text"
                  name="address"
                  placeholder="주소를 입력해주세요."
                  onChange={this.handleInput}
                  value={address}
                  onKeyPress={this.handleKeyPress}
                />
              </div>
              <div className="btnLink">
                <button
                  className="checkOutBtn"
                  type="button"
                  onClick={this.checkAll}
                >
                  <span className="btnText">COUNTINUE TO SHOPPING</span>
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
