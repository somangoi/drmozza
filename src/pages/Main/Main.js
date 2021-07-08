import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import './Main.scss';

export default class Main extends Component {
  render() {
    return (
      <>
        <div className="navWrapper">
          <Nav />
        </div>
        <Card />
        <Footer />
      </>
    );
  }
}
