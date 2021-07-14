import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import CategoryImg from '../../components/CategoryImg/CategoryImg';
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
      selectedOption: 'price_desc',
    };
  }

  componentDidMount() {
    const API = 'http://13.124.4.250:8000';
    const requestOptions = {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
    };
    fetch(`${API}/menus`)
      .then(res => res.json())
      .then(menu => {
        this.setState({
          milkList: menu.results.milk.categories,
          styleList: menu.results.style.categories,
          countriesList: menu.results.countries.categories,
        });
      });

    fetch(`${API}/categories/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(menu => {
        this.setState({
          currentCategory: menu.results,
        });
      });

    fetch(
      `${API}/products?id=${this.props.match.params.id}&offset=1&limit=10&sort_by=price_desc`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          productList: data.results,
        });
      });
  }

  componentDidUpdate(prevProps) {
    const API = 'http://13.124.4.250:8000';
    let PRODUCTS_API = `${API}/products?id=${this.props.match.params.id}&offset=1&limit=10&sort_by=price_desc`;

    if (this.props.match.params.id !== prevProps.match.params.id) {
      fetch(`${API}/categories/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(data =>
          this.setState({
            currentCategory: data.results,
          })
        );

      fetch(PRODUCTS_API)
        .then(res => res.json())
        .then(data => {
          this.setState({
            productList: data.results,
          });
        });
    }
  }

  handleChange = e => {
    this.setState({
      selectedOption: e.target.value,
    });
    console.log(this.state.selectedOption);
  };

  render() {
    const { currentCategory, productList, milkList, styleList, countriesList } =
      this.state;
    return (
      <div>
        <Nav />
        {isValidObject(currentCategory) && (
          <main className="shopContainer">
            <CategoryImg currentCategory={currentCategory} />
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
                <div className="sortSection">
                  <div className="sortBlank"></div>
                  <div className="sortContainer">
                    <div className="sortWrap">
                      <span className="sortText">SORT BY</span>
                      <span className="sortBar">
                        <select
                          name="sort"
                          className="sort"
                          onChange={option => this.handleChange(option)}
                        >
                          <option value="price_descending">
                            Price, High to Low
                          </option>
                          <option value="price_ascending">
                            Price, Low to High
                          </option>
                        </select>
                      </span>
                    </div>
                  </div>
                </div>
                <ProductList productList={productList} />
              </article>
            </section>
          </main>
        )}
        <Footer />
      </div>
    );
  }
}
