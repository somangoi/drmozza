import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './DropDownNav.scss';

class DropDownNav extends Component {
  goToCategory = () => {
    this.props.history.push(`/shop/${this.props.match.params.id}`);
    console.log(`this.props`, this.props);
  };

  render() {
    const { titleList } = this.props;
    return (
      <div className="titleListBox">
        <ul className="titleListContainer">
          {titleList.map(list => (
            <li
              onClick={this.goToCategory}
              key={list.id}
              className="categoryName"
            >
              {list.name.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(DropDownNav);
