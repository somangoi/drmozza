import React, { Component } from 'react';
import './Slogan.scss';

export default class Slogan extends Component {
  render() {
    const { sloganImg, description } = this.props;

    return (
      <div className="slogan">
        <span>{description}</span>
        <img alt="slogan" src={sloganImg} />
      </div>
    );
  }
}
