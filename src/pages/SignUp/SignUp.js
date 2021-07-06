import React, { Component } from 'react';
import '../SignUp/SignUp.scss';

export default class Login extends Component {
  emailRef = React.createRef();
  pwRef = React.createRef();

  state = {
    name: '',
    email: '',
    pw: '',
    address: '',
  };

  emailInput = email => {
    this.setState({
      email: email.target.value,
    });
  };

  pwInput = pw => {
    this.setState({
      pw: pw.target.value,
    });
  };

  nameInput = name => {
    this.setState({
      name: name.target.value,
    });
  };

  addressInput = address => {
    this.setState({
      address: address.target.value,
    });
  };

  checkAll = e => {
    // e.preventDefault();

    const { name, address } = this.state;
    const nameChk = function (str) {
      if (name === '') {
        return false;
      } else {
        return true;
      }
    };
    if (nameChk(this.state.name) === false) {
      alert('이름을 입력해주세요.');
    }

    const chkEmail = function (str) {
      var regExp =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      return regExp.test(str) ? true : false;
    };

    if (chkEmail(this.state.email) === false) {
      alert('이메일 형식이 유효하지 않습니다.');
      this.emailRef.current.value = '';
    }

    const chkPwd = function (str) {
      var reg_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
      return !reg_pwd.test(str) ? false : true;
    };

    if (chkPwd(this.state.pw) === false) {
      alert('영문,숫자를 혼합하여 6~12자 이내로 만들어주세요.');
      this.pwRef.current.value = '';
    }

    const addressChk = function (str) {
      if (address === '') {
        return false;
      } else {
        return true;
      }
    };
    if (addressChk(this.state.address) === false) {
      alert('주소를 입력해주세요.');
    }
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.checkAll();
    }
  };

  render() {
    return (
      <div className="wholePage">
        <header className="Nav">임시헤더</header>
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
              onChange={this.nameInput}
              onKeyPress={this.handleKeyPress}
            ></input>
          </div>
          <div className="signUpInput">
            <label className="info">
              EMAIL
              <span className="dot">*</span>
            </label>
            <input
              className="userInput"
              type="text"
              ref={this.emailRef}
              onChange={this.emailInput}
              onKeyPress={this.handleKeyPress}
            ></input>
          </div>
          <div className="signUpInput">
            <label className="info">
              PASSWORD
              <span className="dot">*</span>
            </label>
            <input
              className="userInput"
              type="password"
              ref={this.pwRef}
              onChange={this.pwInput}
              onKeyPress={this.handleKeyPress}
            ></input>
          </div>
          <div className="signUpInput">
            <label className="info">
              ADDRESS
              <span className="dot">*</span>
            </label>
            <input
              className="userInput"
              type="text"
              onChange={this.addressInput}
              onKeyPress={this.handleKeyPress}
            ></input>
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
        <footer className="mainFooter">임시풋터</footer>
      </div>
    );
  }
}
