import React, { Component } from 'react';
import DropDownNav from './DropDownNav';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './Nav.scss';

class Nav extends Component {
  // goToCategory = () => {
  //   this.props.history.push(`/shop/${this.props.match.params.id}`);
  //   console.log(`this.props`, this.props);
  // };

  render() {
    const { milkList, styleList, countriesList } = this.props;
    console.log(`this.props`, this.props);
    return (
      <div className="navBox">
        {milkList && (
          <>
            <div className="navContainer">
              <div className="navLogo">Dr.Mozza+</div>
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
                  <p>LOG IN</p>
                </li>
                <li> SEARCH</li>
                <li>
                  <i className="fa fa-shopping-bag" />
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
