import React, { Component } from 'react';
import './Slogan.scss';

export default class Slogan extends Component {
  render() {
    console.log(`this.props`, this.props);
    return (
      <div className="slogan">
        <span>{this.props.description}</span>
        <img alt="slogan" src={this.props.sloganImg} />
      </div>
    );
  }
}
