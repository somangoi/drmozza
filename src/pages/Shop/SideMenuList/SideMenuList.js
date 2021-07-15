import React, { Component } from 'react';
import SideMenu from './SideMenu/SideMenu';
import './SideMenuList.scss';

class SideMenuList extends Component {
  constructor() {
    super();
    this.state = {
      currentCategory: [],
    };
  }
  componentDidMount() {
    const API = 'http://13.124.4.250:8000/';
    fetch(`${API}menus`)
      // fetch('/data/category.json')
      .then(res => res.json())
      .then(menu => {
        this.setState({
          currentCategory: menu.results.all.categories[0],
        });
      });
  }

  render() {
    const { milkList, styleList, countriesList } = this.props;
    return (
      <div className="sideMenuBottom">
        <SideMenu
          milkList={milkList}
          styleList={styleList}
          countriesList={countriesList}
        />
      </div>
    );
  }
}

export default SideMenuList;
