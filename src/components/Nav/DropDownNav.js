import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './DropDownNav.scss';

class DropDownNav extends Component {
  render() {
    const { titleList } = this.props;

    return (
      <div className="titleListBox">
        <ul className="titleListContainer">
          {titleList.map(list => (
            <Link to={`/shop/${list.category_id}`}>
              <li key={list.category_id} className="categoryName">
                {list.category_name.toUpperCase()}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(DropDownNav);
