import React, { Component } from 'react';
import './DropDownNav.scss';

export default class DropDownNav extends Component {
  render() {
    const { titleList } = this.props;

    return (
      <div className="titleListBox">
        <li className="titleListContainer">
          {titleList.map(list => (
            <div key={list.id} className="categoryName">
              {list.name.toUpperCase()}
            </div>
          ))}
        </li>
      </div>
    );
  }
}
