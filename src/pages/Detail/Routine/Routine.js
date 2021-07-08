import React, { Component } from 'react';
import Card from '../../../components/Card/Card';
import './Routine.scss';

export default class Routine extends Component {
  constructor() {
    super();
    this.state = {
      cardList: [],
    };
  }

  componentDidMount() {
    fetch('/data/products.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(cardData => {
        this.setState({
          cardList: cardData,
        });
      });
  }

  render() {
    const { cardList } = this.state;
    return (
      <div className="routineContainer">
        <h2>ROUTINE</h2>
        <div className="cardsWrapper">
          {cardList.map(card => {
            return (
              <div className="cardBox">
                <Card
                  key={card.id}
                  thumbnail={card.thumbnail}
                  name={card.name}
                  price={card.price}
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
