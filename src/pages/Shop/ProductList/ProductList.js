import React, { Component } from 'react';
import Card from '../../../components/Card/Card';
import './ProductList.scss';

class ProductList extends Component {
  render() {
    const { productList } = this.props;
    return (
      <div className="productGrid">
        {productList.map(product => {
          return (
            <Card
              key={product.product_id}
              id={product.product_id}
              thumbnail={product.thumbnail}
              hoverImg={product.hover_image}
              name={product.product_name}
              price={product.price}
              stocks={product.stocks}
              option={product.option}
              score={product.score}
            />
          );
        })}
        <nav>
          <ul></ul>
        </nav>
      </div>
    );
  }
}

export default ProductList;
