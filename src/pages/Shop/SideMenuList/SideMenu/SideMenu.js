import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import './SideMenu.scss';

class SideMenuBottom extends Component {
  render() {
    const { milkList, styleList, countriesList } = this.props;
    return (
      <>
        <div className="sideMenuGroup">
          <h2 className="sideMenuTitle">Type of Milk</h2>
          <ul className="sideMenuContent" id="sideMenuGroup1">
            {milkList.length > 0 &&
              milkList.map(milk => {
                return (
                  <Link
                    to={`/shop/${milk.category_id}`}
                    key={milk.category_id}
                    id={milk.category_id}
                  >
                    <li>{milk.category_name.toUpperCase()}</li>
                  </Link>
                );
              })}
          </ul>
        </div>
        <div className="sideMenuGroup">
          <h2 className="sideMenuTitle">Style of Cheese</h2>
          <ul className="sideMenuContent" id="sideMenuGroup1">
            {styleList.length > 0 &&
              styleList.map(style => {
                return (
                  <Link
                    to={`/shop/${style.category_id}`}
                    key={style.category_id}
                    id={style.category_id}
                  >
                    <li>{style.category_name.toUpperCase()}</li>
                  </Link>
                );
              })}
          </ul>
        </div>
        <div className="sideMenuGroup">
          <h2 className="sideMenuTitle">Countries</h2>
          <ul className="sideMenuContent" id="sideMenuGroup1">
            {countriesList.length > 0 &&
              countriesList.map(country => {
                return (
                  <Link
                    to={`/shop/${country.category_id}`}
                    key={country.category_id}
                    id={country.category_id}
                  >
                    <li>{country.category_name.toUpperCase()}</li>
                  </Link>
                );
              })}
          </ul>
        </div>
      </>
    );
  }
}

export default withRouter(SideMenuBottom);
