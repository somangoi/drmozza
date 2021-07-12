import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import './Main.scss';

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      milkList: [],
      styleList: [],
      countriesList: [],
    };
  }

  componentDidMount() {
    fetch('data/nav.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          milkList: data.results.milk.categories,
          styleList: data,
          countreisList: data,
        });
      });
  }

  render() {
    console.log(`this.state`, this.state);
    return (
      <>
        <div className="navWrapper">
          <Nav
            milkList={this.state.milkList}
            styleList={this.state.styleList}
            countreisList={this.state.styleList}
          />
        </div>
        {/* <Card /> */}
        <Footer />
      </>
    );
  }
}
