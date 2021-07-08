import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import { chkEmail, chkPwd } from '../../Validation/Validation';
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

  goToMain = () => {
    this.props.history.push('/main');
  };

  checkAll = e => {
    const { email, password } = this.state;
    if (chkEmail(email) && chkPwd(password)) {
      alert('로그인 완료');
      this.goToMain();
    } else {
      alert('입력하신 정보를 다시 확인해주세요.');
      this.setState({ email: '', password: '' });
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
          <a className="goToMain" href="/main">
            Return to Home
          </a>
          <Footer />
        </div>
      </>
    );
  }
}

export default Login;
