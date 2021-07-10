import React, { Component } from 'react';
import Card from '../../../components/Card/Card';
import './Routine.scss';

export default class Routine extends Component {
  render() {
    const { routineList, productName } = this.props;

    return (
      <div className="routineContainer">
        <h2>ROUTINE</h2>
        <div className="cardsWrapper">
          {routineList.map(card => {
            return (
              <div
                className={
                  productName === card.product_name
                    ? 'cardBox currentProduct'
                    : 'cardBox'
                }
              >
                <div
                  className={
                    productName === card.product_name
                      ? 'currentItem'
                      : 'currentItem hide'
                  }
                >
                  <span>CURRENT ITEM</span>
                </div>
                <Card
                  key={card.product_id}
                  thumbnail={card.thumbmail_image}
                  hoverImg={card.hover_image}
                  stock={card.stocks}
                  currentItem={card.current}
                  name={card.product_name}
                  option={card.option}
                  rating={card.score}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
