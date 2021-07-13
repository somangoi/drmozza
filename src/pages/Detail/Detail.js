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
      id: '',
      categoryList: {},
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
    // fetch('http://10.58.6.15/products')
    //   .then(res => res.json())
    //   .then(menu => {
    //     this.setState({
    //       categoryList: menu.resultss.milk.categories[0],
    //     });
    //   });

    fetch('/data/detail.json')
      // fetch(`http://10.58.1.65:8000/products/${this.props.match.params.id}`, {
      //   method: 'GET',
      // })
      .then(res => {
        return res.json();
      })
      .then(detail => {
        this.setState({
          id: detail.results.product.product_id,
          categoryList: detail.results.product.categories,
          currentCategory: detail.results.product.categories[0],
          imgList: detail.results.product.image_urls,
          productName: detail.results.product.product_name,
          optionList: detail.results.product.option,
          summary: detail.results.product.summary,
          description: detail.results.product.description,
          nutritionList: detail.results.product.nutrition,
          descriptionImage: detail.results.product.description_image,
          routineList: detail.results.routine,
          compareList: detail.results.compare,
        });
      });
  }

  render() {
    console.log(this.props);
    const {
      categoryList,
      imgList,
      productName,
      summary,
      description,
      optionList,
      nutritionList,
      descriptionImage,
      routineList,
      compareList,
      currentCategory,
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
