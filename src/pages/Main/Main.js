import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import './Main.scss';

export default class Main extends Component {
  state = {
    cheeseName: '',
    cheeseServerInput: [],
  };

  render() {
    return (
      <>
        <div className="navWrapper">
          <Nav />
        </div>
        <Footer />
      </>
    );
  }
}
