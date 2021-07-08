import React, { Component } from 'react';
import Card from '../../../components/Card/Card';

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
        <div className="cardWrapper">
          {cardList.map(card => {
            return <Card key={card.id} cardList={card} />;
          })}
        </div>
      </div>
    );
  }
}
