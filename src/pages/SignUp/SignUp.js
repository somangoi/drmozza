import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import {
  chkEmail,
  chkPwd,
  chkName,
  chkAddress,
} from '../../Validation/Validation';
import { LOGIN_API } from '../../config';
import '../SignUp/SignUp.scss';

export default class Login extends Component {
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

  checkAll = e => {
    const { name, email, password, address } = this.state;

    if (
      chkName(name) &&
      chkEmail(email) &&
      chkPwd(password) &&
      chkAddress(address)
    ) {
      fetch(`${LOGIN_API}/accounts/signup`, {
        method: 'POST',
        body: JSON.stringify({ name, email, password, address }),
      }).then(res => {
        if (res.ok) {
          alert('가입이 완료되었습니다.');
          this.props.history.push('/login');
        }
      });
    } else {
      alert('입력하신 정보를 다시 확인해주세요.');
    }
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.checkAll();
    }
  };

  render() {
    const { name, email, password, address } = this.state;
    return (
      <>
        <Nav />
        <div className="wholePage">
          <div className="signUpContents">
            <h1 className="signUpTitle">CREATE AN ACCOUNT</h1>
            <span className="indicater">* indicates a required field</span>
            <div className="signUpInput">
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
            <div className="signUpInput">
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
            <div className="signUpInput">
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
            <div className="signUpInput">
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
          </div>
          <button className="signUpBtn" type="button" onClick={this.checkAll}>
            <span className="btnText">CREATE ACCOUNT</span>
          </button>
          <div className="linkContain">
            Already have an account?
            <a className="goToSignIn" href="/Login">
              SIGN IN HERE
            </a>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}
