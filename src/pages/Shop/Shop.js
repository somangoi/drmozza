import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import CategoryImg from '../../components/CategoryImg/CategoryImg';
import Sort from './Sort/Sort';
import SideMenuList from './SideMenuList/SideMenuList';
import ProductList from './ProductList/ProductList';
import Footer from '../../components/Footer/Footer';
import { isValidObject } from '../../../src/utils';

import '../Shop/Shop.scss';

export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCategory: {},
      productList: [],
      milkList: [],
      styleList: [],
      countriesList: [],
    };
  }

  componentDidMount() {
    const API = 'http://13.124.4.250:8000/';
    fetch(`${API}menus`)
      .then(res => res.json())
      .then(menu => {
        this.setState({
          milkList: menu.results.milk.categories,
          styleList: menu.results.style.categories,
          countriesList: menu.results.countries.categories,
        });
      });

    fetch(`${API}categories/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(menu => {
        this.setState({
          currentCategory: menu.results,
        });
      });

    fetch(`${API}products/products?limit=130`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productList: data.results,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {}

  render() {
    const { currentCategory, productList, milkList, styleList, countriesList } =
      this.state;
    return (
      <div>
        <Nav />
        <main className="shopContainer">
          {isValidObject(currentCategory) && (
            <CategoryImg currentCategory={currentCategory} />
          )}
          <section className="shopBody">
            <aside className="shopAside">
              <ul className="sideMenuTop">
                <Link to="/shop/14">
                  <li>SHOP ALL</li>
                </Link>
                <Link to="/shop/15">
                  <li>BEST SELLERS</li>
                </Link>
              </ul>
              <SideMenuList
                milkList={milkList}
                styleList={styleList}
                countriesList={countriesList}
              />
            </aside>
            <article className="products">
              <Sort />
              <ProductList productList={productList} />
            </article>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
