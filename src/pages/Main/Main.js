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
          styleList: data.results.style.categories,
          countriesList: data.results.countries.categories,
        });
      });
  }

  render() {
    const { milkList, styleList, countriesList } = this.state;
    console.log(`this.state`, this.state);
    return (
      <>
        <div className="navWrapper">
          <Nav
            milkList={milkList}
            styleList={styleList}
            countriesList={countriesList}
          />
        </div>
        <Footer />
      </>
    );
  }
}
