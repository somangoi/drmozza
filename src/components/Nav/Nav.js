import React, { Component } from 'react';
import DropDownNav from './DropDownNav';
import './Nav.scss';

export default class Nav extends Component {
  render() {
    const { milkList, styleList, countriesList } = this.props;
    console.log(`this.props`, this.props);

    return (
      <div className="navBox">
        <div className="navContainer">
          <div className="navLogo">Dr.Mozza+</div>
          <ul className="navList">
            <li>All</li>

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

            <li>BESTSELLER</li>
          </ul>
          <ul className="navRight">
            <li>SEARCH</li>
            <li>
              <i className="fa fa-shopping-bag" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
