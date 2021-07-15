import React, { Component } from 'react';
import DropDownNav from './DropDownNav';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      milkList: [],
      styleList: [],
      countriesList: [],
    };
  }

  componentDidMount() {
    fetch('http://13.124.4.250:8000/menus')
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
                  <Link to="/signup">
                    <p>LOG IN</p>
                  </Link>
                </li>
                <li> SEARCH</li>
                <li>
                  <Link to="/cart">
                    <i className="fa fa-shopping-bag" />
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
