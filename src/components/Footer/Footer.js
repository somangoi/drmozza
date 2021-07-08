import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className="footerWrapper">
        <footer className="footerContainer">
          <div className="snsIconSet">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-tiktok"></i>
          </div>
          <ul className="footerList">
            <li>TAKE OUT QUIZ!</li>
            <li>ABOUT</li>
            <li>MY ORDERS</li>
            <li>SHIPPING & RETURNS</li>
            <li>FAQ</li>
            <li>STORE LOCATOR</li>
            <li>CONTACT US</li>
          </ul>
          <div className="footerInput">
            <div className="footerLabel">
              <input
                type="text"
                className="footerNews"
                placeholder="NEWSLETTER SIGN UP *"
              />
            </div>
            <i className="far fa-paper-plane"></i>
          </div>
        </footer>
        <div className="copyRight">
          Copyright © 2021 Dr. Mozza, Have & Be ROK, Inc. All Rights Reserved.
        </div>
      </div>
    );
  }
}
