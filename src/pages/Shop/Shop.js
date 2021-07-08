import React, { Component } from 'react';
import '../Shop/Shop.scss';
import Header from './Header/Header';
import Sort from './Sort/Sort';
import SideMenuList from './SideMenuList/SideMenuList';
import ProductList from './ProductList/ProductList';

export default class Shop extends Component {
  render() {
    return (
      <div>
        <main className="shopContainer">
          <Header />
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
              <ProductList />
            </article>
          </section>
        </main>
      </div>
    );
  }
}
