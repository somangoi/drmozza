import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Header from './Header/Header';
import Sort from './Sort/Sort';
import SideMenuList from './SideMenuList/SideMenuList';
import ProductList from './ProductList/ProductList';
import Footer from '../../components/Footer/Footer';
import '../Shop/Shop.scss';

export default class Shop extends Component {
  render() {
    return (
      <div>
        <Nav />
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
        <Footer />
      </div>
    );
  }
}
