import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import CategoryImg from '../../components/CategoryImg/CategoryImg';
import Sort from './Sort/Sort';
import SideMenuList from './SideMenuList/SideMenuList';
import ProductList from './ProductList/ProductList';
import Footer from '../../components/Footer/Footer';
import * as isValidObject from '../../../src/utils';

import '../Shop/Shop.scss';

export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryList: {},
      productList: [],
    };
  }

  componentDidMount() {
    const API = '';
    // fetch(`${API}/${this.menu_id}/${this.category_id}`)
    fetch('/data/category.json')
      .then(res => res.json())
      .then(menu => {
        this.setState({
          categoryList: menu.results.milk.categories[0],
        });
      });

    fetch(`/data/shop.json`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productList: data.results,
        });
      });
  }

  render() {
    console.log(this.props.location.search);
    const { categoryList, productList } = this.state;
    return (
      <div>
        <Nav />
        <main className="shopContainer">
          {isValidObject.isValidObject(categoryList) && (
            <CategoryImg categoryList={categoryList} />
          )}
          <section className="shopBody">
            <aside className="shopAside">
              <ul className="sideMenuTop">
                <li>SHOP ALL</li>
                <li>BEST SELLERS</li>
                <li>SALE</li>
                <li>NEW!</li>
              </ul>
              <SideMenuList />
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
