import React, { Component } from 'react';
import Card from '../../../components/Card/Card';
import './ProductList.scss';

class ProductList extends Component {
  render() {
    const { productList } = this.props;
    console.log(productList);
    return (
      <div className="productGrid">
        {productList.map(product => {
          return (
            <Card
              key={product.id}
              thumbnail={product.thumbnail}
              name={product.name}
              price={product.price}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
