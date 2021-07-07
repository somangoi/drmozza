import React, { Component } from 'react';
//import { chkEmail, chkPwd } from "./Validation";
import '../Login/Login.scss';

class Login extends Component {
  emailRef = React.createRef();
  pwRef = React.createRef();

  state = {
    email: '',
    pw: '',
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

  goToMain = () => {
    this.props.history.push('/main');
  };

  chkEmail = email => {
    var regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return regExp.test(email) ? true : false;
  };

  chkPwd = pw => {
    var reg_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
    return !reg_pwd.test(pw) ? false : true;
  };
  checkAll = e => {
    if (this.chkEmail(this.state.email) === false) {
      alert('이메일 형식이 유효하지 않습니다.');
      this.emailRef.current.value = '';
    }

    if (this.chkPwd(this.state.pw) === false) {
      alert('비밀번호를 확인해주세요.');
      this.pwRef.current.value = '';
    }

    if (
      this.chkEmail(this.state.email) &&
      this.chkPwd(this.state.pw) === true
    ) {
      alert('로그인 성공');
      this.goToMain();
      return true;
    } else if (
      this.chkEmail(this.state.email) &&
      this.chkPwd(this.state.pw) === false
    ) {
      return false;
    }
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.checkAll();
    }
  };

  render() {
    return (
      <div className="loginPage">
        <header className="Nav">임시헤더</header>
        <div className="loginContents">
          <h1 className="loginTitle">LOG IN</h1>
          <span className="indicater">* indicates a required field</span>
          <div className="loginInput">
            <label className="loginInfo">
              EMAIL ADDRESS
              <span className="dot">*</span>
            </label>
            <input
              className="loginInput"
              ref={this.emailRef}
              onChange={this.emailInput}
              onKeyPress={this.handleKeyPress}
            ></input>
          </div>
          <div className="loginInput">
            <label className="loginInfo">
              PASSWORD
              <span className="dot">*</span>
            </label>
            <input
              className="loginInput"
              type="password"
              ref={this.pwRef}
              onChange={this.pwInput}
              onKeyPress={this.handleKeyPress}
            ></input>
          </div>
        </div>
        <button className="loginBtn" type="button" onClick={this.checkAll}>
          <span className="btnText">SIGN IN</span>
        </button>
        <div className="signUpLink">
          Don’t have an account?
          <a className="goToSignUp" href="/SignUp">
            Register Now
          </a>
        </div>
        <a className="goToMain" href="/main">
          Return to Home
        </a>
        <footer className="mainfooter">임시풋터</footer>
      </div>
    );
  }
}

export default Login;
