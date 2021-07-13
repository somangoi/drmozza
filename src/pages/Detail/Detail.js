import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import ProductDetail from './ProductDetail/ProductDetail';
import ProductFunc from './ProductFunc/ProductFunc';
import PromotionImg from './PromotionImg/PromotionImg';
import Routine from './Routine/Routine';
import CategoryImg from '../../components/CategoryImg/CategoryImg';
import CompareProduct from './CompareProduct/CompareProduct';
import Footer from '../../components/Footer/Footer';
import * as isValidObject from '../../../src/utils';

import './Detail.scss';

export default class Detail extends Component {
  constructor() {
    super();
    this.state = {
      categoryList: [],
      currentCategory: {},
      imgList: [],
      productName: '',
      optionList: [],
      summary: '',
      description: '',
      nutritionList: [],
      descriptionImage: '',
      routineList: [],
      compareList: [],
    };
  }

  componentDidMount() {
    fetch('/data/detail.json', { method: 'GET' })
      .then(res => {
        return res.json();
      })
      .then(detail => {
        this.setState({
          categoryList: detail.RESULT.categories,
          currentCategory: detail.RESULT.categories[0],
          imgList: detail.RESULT.image_urls,
          productName: detail.RESULT.product_name,
          optionList: detail.RESULT.option,
          summary: detail.RESULT.summary,
          description: detail.RESULT.description,
          nutritionList: detail.RESULT.nutrition,
          descriptionImage: detail.RESULT.description_image,
          routineList: detail.RESULT_ROUTINE,
          compareList: detail.RESULT_COMPARE,
        });
      });
  }

  render() {
    const {
      categoryList,
      currentCategory,
      imgList,
      productName,
      summary,
      description,
      optionList,
      nutritionList,
      descriptionImage,
      routineList,
      compareList,
    } = this.state;
    return (
      <>
        <Nav />
        <div className="detailWrapper">
          <ProductDetail
            categoryList={categoryList}
            imgList={imgList}
            product_name={productName}
            summary={summary}
            description={description}
            optionList={optionList}
            nutritionList={nutritionList}
          />
          <article className="detailBody">
            <ProductFunc />
            <PromotionImg descriptionImage={descriptionImage} />
            <Routine routineList={routineList} productName={productName} />
            {isValidObject.isValidObject(currentCategory) && (
              <CategoryImg currentCategory={currentCategory} />
            )}
            <CompareProduct compareList={compareList} />
          </article>
        </div>
        <Footer />
      </>
    );
  }
}
