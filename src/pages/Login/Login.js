import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import { chkEmail, chkPwd } from '../../Validation/Validation';
import { LOGIN_API } from '../../config';
import '../Login/Login.scss';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  checkAll = e => {
    const { email, password } = this.state;
    if (chkEmail(email) && chkPwd(password)) {
      fetch(LOGIN_API, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.TOKEN) {
            localStorage.setItem('TOKEN', res.TOKEN);
            this.props.history.push('/');
          } else {
            alert('입력하신 정보를 다시 확인해주세요.');
            this.setState({ email: '', password: '' });
          }
        });
    }
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.checkAll();
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <Nav />
        <div className="loginPage">
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
                type="text"
                name="email"
                onChange={this.handleInput}
                value={email}
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
                name="password"
                onChange={this.handleInput}
                value={password}
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
          <a className="goToMain" href="/">
            Return to Home
          </a>
          <Footer />
        </div>
      </>
    );
  }
}

export default Login;
