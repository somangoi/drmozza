import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import ProductDetail from './ProductDetail/ProductDetail';
import ProductFunc from './ProductFunc/ProductFunc';
import PromotionImg from './PromotionImg/PromotionImg';
import Routine from './Routine/Routine';
import CategoryImg from '../../components/CategoryImg/CategoryImg';
import CompareProduct from './CompareProduct/CompareProduct';
import Footer from '../../components/Footer/Footer';
import { isValidObject } from '../../../src/utils';

import './Detail.scss';

export default class Detail extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    const API = 'http://13.124.4.250:8000/products';

    fetch(`${API}/${this.props.match.params.id}`, {
      method: 'GET',
    })
      .then(res => {
        return res.json();
      })
      .then(detail => {
        this.setState({
          data: detail,
        });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <Nav />
        {isValidObject(data) && (
          <div className="detailWrapper">
            <ProductDetail
              categoryList={data.results.product.categories}
              imgList={data.results.product.image_urls}
              product_name={data.results.product.product_name}
              summary={data.results.product.summary}
              description={data.results.product.description}
              optionList={data.results.product.option}
              nutritionList={data.results.product.nutrition}
            />

            <article className="detailBody">
              <ProductFunc />
              <PromotionImg
                descriptionImage={data.results.product.description_image}
              />
              <Routine
                routineList={data.results.routine}
                productName={data.results.product.product_name}
              />
              <CategoryImg
                currentCategory={data.results.product.categories[0]}
              />
              <CompareProduct compareList={data.results.compare} />
            </article>
          </div>
        )}
        <Footer />
      </>
    );
  }
}
