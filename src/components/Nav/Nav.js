import React, { Component } from 'react';
import DropDownNav from './DropDownNav';
import { CART_API } from '../../config';
import { Link, withRouter } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      milkList: [],
      styleList: [],
      countriesList: [],
      cartQuantity: [],
    };
  }

  componentDidMount() {
    const requestOptions = {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
    };

    fetch('http://13.124.4.250:8000/menus')
      .then(res => res.json())
      .then(data => {
        this.setState({
          milkList: data.results.milk.categories,
          styleList: data.results.style.categories,
          countriesList: data.results.countries.categories,
        });
      });

    fetch(CART_API, requestOptions)
      .then(res => res.json())
      .then(data => {
        this.setState({
          cartQuantity: data.results.total,
        });
      });
  }

  render() {
    const { milkList, styleList, countriesList, cartQuantity } = this.state;

    return (
      <div className="navBox">
        {milkList && (
          <>
            <div className="navContainer">
              <Link className="navLogo" to="/main">
                <div>Dr.Mozza+</div>
              </Link>
              <ul className="navList">
                <Link to="/shop/14">
                  <li>All</li>
                </Link>

                <li className="dropDownMilk">
                  MILK <i className="fa fa-angle-down" />
                  <div className="dropDownMilkList">
                    <DropDownNav titleList={milkList} />
                  </div>
                </li>

                <li className="dropDownStyle">
                  STYLE <i className="fa fa-angle-down" />
                  <div className="dropDownStyeList">
                    <DropDownNav titleList={styleList} />
                  </div>
                </li>

                <li className="dropDownCountries">
                  COUNTRIES <i className="fa fa-angle-down" />
                  <div className="dropDownCountriesList">
                    <DropDownNav titleList={countriesList} />
                  </div>
                </li>

                <Link to="/shop/15">
                  <li>BESTSELLER</li>
                </Link>
              </ul>

              <ul className="navRight">
                <li className="logInIcon">
                  <Link to="/login">
                    <p>LOG IN</p>
                  </Link>
                </li>
                <li> SEARCH</li>
                <li>
                  <Link to="/cart">
                    <div className="cartCountingWrapper">
                      <i className="fa fa-shopping-bag">
                        <div className="cartCounting">{cartQuantity}</div>
                      </i>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="backgroundBox"></div>
          </>
        )}
      </div>
    );
  }
}

export default withRouter(Nav);
