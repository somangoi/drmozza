import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import ProductDetail from './ProductDetail/ProductDetail';
import ProductFunc from './ProductFunc/ProductFunc';
import PromotionImg from './PromotionImg/PromotionImg';
import Routine from './Routine/Routine';
import CategoryImg from '../../components/CategoryImg/CategoryImg';
import ItemGrid from './ItemGrid/ItemGrid';
import Footer from '../../components/Footer/Footer';

import './Detail.scss';

export default class Detail extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="detailWrapper">
          <ProductDetail />
          <article className="detailBody">
            <ProductFunc />
            <PromotionImg />
            <Routine />
            <CategoryImg />
            <ItemGrid />
          </article>
        </div>
        <Footer />
      </>
    );
  }
}
