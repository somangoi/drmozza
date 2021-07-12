import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import CategoryImg from '../../components/CategoryImg/CategoryImg';
import Sort from './Sort/Sort';
import SideMenuList from './SideMenuList/SideMenuList';
import ProductList from './ProductList/ProductList';
import Footer from '../../components/Footer/Footer';
import '../Shop/Shop.scss';

export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCategory: {},
      productList: [],
    };
  }

  componentDidMount() {
    fetch('/data/category.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          currentCategory: data.MESSAGE.SUCCESS[1].categories[0],
          productList: data.MESSAGE.SUCCESS[2].products[0],
        });
      });
  }

  render() {
    const { currentCategory, productList } = this.state;
    console.log(this.state.productList);
    return (
      <div>
        <Nav />
        <main className="shopContainer">
          <CategoryImg currentCategory={currentCategory} />
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
