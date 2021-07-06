import React, { Component } from 'react';
import CardLarge from './CardLarge/CardLarge';
import './Main.scss';

export default class Login extends Component {
  render() {
    return (
      <>
        <div className="nav">네브 컴포넌트 자리</div>
        <body>
          <div className="slideFst">슬라이드1</div>
          <CardLarge /> //기존 카드 컴포넌트 재활용
          <div className="slogan">슬로건</div>
          <div className="slideScd">슬라이드2</div>
          <div className="cheeseAd">광고</div>
        </body>
        <div className="footer">푸터 자리</div>
      </>
    );
  }
}
