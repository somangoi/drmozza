import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryImg from '../../components/CategoryImg/CategoryImg';
import SideMenuList from './SideMenuList/SideMenuList';
import ProductList from './ProductList/ProductList';
import Footer from '../../components/Footer/Footer';
import { isValidObject } from '../../utils';
import { PRODUCT_API } from '../../config';
import { API } from '../../config';
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
      // selectedOption: '',
    };
  }

  componentDidMount() {
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

    fetch(`${PRODUCT_API}?category=${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productList: data.results,
        });
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      fetch(`${API}/categories/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(data =>
          this.setState({
            currentCategory: data.results,
          })
        );

      fetch(`${API}/products?category=${this.props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            productList: data.results,
          });
        });
    }
  }

  sortingHandler = e => {
    fetch(
      `${PRODUCT_API}?category=${this.props.match.params.id}&sort=${e.target.value}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          productList: data.results,
        });
      });
  };

  render() {
    const { currentCategory, productList, milkList, styleList, countriesList } =
      this.state;

    return (
      <div>
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
              <div className="sortSection">
                <div className="sortBlank"></div>
                <div className="sortContainer">
                  <div className="sortWrap">
                    <span className="sortText">SORT BY</span>
                    <span className="sortBar">
                      <select
                        name="sort"
                        className="sort"
                        onChange={this.sortingHandler}
                      >
                        <option value="price-descending">
                          Price, High to Low
                        </option>
                        <option value="price-ascending">
                          Price, Low to High
                        </option>
                        <option value="score-descending">
                          Score, High to Low
                        </option>
                        <option value="score-ascending">
                          Score, Low to High
                        </option>
                        <option value="sales-descending">
                          Sales, High to Low
                        </option>
                        <option value="sales-ascending">
                          Sales, Low to High
                        </option>
                      </select>
                    </span>
                  </div>
                </div>
              </div>
              {productList.length > 0 && (
                <ProductList productList={productList} />
              )}
            </article>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
