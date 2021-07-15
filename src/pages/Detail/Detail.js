import React, { Component } from 'react';
import ProductDetail from './ProductDetail/ProductDetail';
import ProductFunc from './ProductFunc/ProductFunc';
import PromotionImg from './PromotionImg/PromotionImg';
import Routine from './Routine/Routine';
import CategoryImg from '../../components/CategoryImg/CategoryImg';
import CompareProduct from './CompareProduct/CompareProduct';
import Footer from '../../components/Footer/Footer';
import { PRODUCT_API } from '../../config';
import { isValidObject } from '../../../src/utils';

import './Detail.scss';
import { withRouter } from 'react-router-dom';

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    fetch(`${PRODUCT_API}/${this.props.match.params.id}`)
      .then(res => {
        return res.json();
      })
      .then(detail => {
        this.setState({
          data: detail,
        });
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      fetch(`${PRODUCT_API}/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(detail => {
          this.setState({
            data: detail,
          });
        });
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { data } = this.state;
    return (
      <>
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
              id={data.results.product.product_id}
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

export default withRouter(Detail);
