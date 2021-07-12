import React, { Component } from 'react';
import DropDownNav from './DropDownNav';
import './Nav.scss';

export default class Nav extends Component {
  render() {
    console.log(`this.props`, this.props);
    return (
      <div className="navBox">
        <div className="navContainer">
          <div className="navLogo">Dr.Mozza+</div>
          <ul className="navList">
            <li>All</li>

            <li className="dropDownMilk">
              MILK <i className="fa fa-angle-down" />
            </li>
            <div className="dropDownMilkMenu">
              {this.props.milkList.map(list => (
                <DropDownNav titile={list.title} items={list.items} />
              ))}
            </div>

            {/* <li className="dropDownStyle">
              STYLE <i className="fa fa-angle-down" />
            </li>
            <div className="dropDownStyeList">
              {this.props.styleList.map(list => (
                <DropDownNav titile={list.title} items={list.items} />
              ))}
            </div>

            <li className="dropDownCountry">
              COUNTRIES <i className="fa fa-angle-down" />
            </li>
            <div className="dropDownCountriesList">
              {this.props.countriesList.map(list => (
                <DropDownNav titile={list.title} items={list.items} />
              ))}
            </div> */}

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
