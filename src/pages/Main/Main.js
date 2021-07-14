import React, { Component } from 'react';
import CardLarge from './CardLarge/CardLarge';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import CategoryImg from '../../components/CategoryImg/CategoryImg';
import Slogan from './Slogan/Slogan';
import './Main.scss';

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      carouselImg: [],
      sloganImg: {},
      cardLarge: [],
      dragCard: [],
      index: 0,
      dragIndex: 0,
    };
  }

  componentDidMount() {
    fetch('data/CarouselData.json')
      // fetch('http://13.124.4.250:8000/events')
      .then(res => res.json())
      .then(data => {
        this.setState({
          carouselImg: data.results.product_events,
          cardLarge: data.results.category_events,
          sloganImg: data.results.slogan_events,
        });
      });

    fetch('data/bestSeller.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          dragCard: data.results[0].products,
        });
      });
  }

  handleClickPrev = () => {
    if (this.state.index === 0) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState({
        index: this.state.index - 1,
      });
    }
  };

  handleClickNext = () => {
    if (this.state.index === 3) {
      this.setState({
        index: 3,
      });
    } else {
      this.setState({
        index: this.state.index + 1,
      });
    }
  };

  dragClickPrev = () => {
    if (this.state.dragIndex === 0) {
      this.setState({
        dragIndex: 0,
      });
    } else {
      this.setState({
        dragIndex: this.state.dragIndex - 1,
      });
    }
  };

  dragClickNext = () => {
    if (this.state.dragIndex === 1) {
      this.setState({
        dragIndex: 1,
      });
    } else {
      this.setState({
        dragIndex: this.state.dragIndex + 1,
      });
    }
  };

  render() {
    const { carouselImg, cardLarge, sloganImg, dragCard } = this.state;

    return (
      <>
        <main className="mainContainer">
          <div className="carouselWrapper">
            <div className="slideBox">
              <ul
                className="slideFstWrapper"
                style={{
                  transform: `translateX(-${100 * this.state.index}vw)`,
                }}
              >
                {carouselImg.map(img => (
                  <Carousel
                    key={img.product_id}
                    img={img.image_url}
                    title={img.product_name}
                    description={img.product_summary}
                  />
                ))}
              </ul>
            </div>

            <div className="buttonWrapper">
              <i
                className="fas fa-chevron-left fa-4x"
                onClick={this.handleClickPrev}
              ></i>
              <i
                className="fas fa-chevron-right fa-4x"
                onClick={this.handleClickNext}
              ></i>
            </div>
          </div>

          <div className="cardLargeBox">
            <ul className="cardLargeWrapper">
              {cardLarge.map(card => (
                <CardLarge
                  key={card.category_id}
                  id={card.category_id}
                  cardImage={card.image_url}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </ul>
          </div>

          <Slogan
            sloganImg={sloganImg.image_url}
            description={sloganImg.slogan}
          />

          <div className="dragWrapper">
            <div className="dragbuttonWrapper">
              <i
                className="fas fa-chevron-left fa-4x"
                onClick={this.dragClickPrev}
              ></i>
              <i
                className="fas fa-chevron-right fa-4x"
                onClick={this.dragClickNext}
              ></i>
            </div>
            <div className="dragBox">
              <p>Dr.Mozza's Choices</p>
              <ul
                className="dragFstWrapper"
                style={{
                  transform: `translateX(-${1252 * this.state.dragIndex}px)`,
                }}
              >
                {dragCard.map(res => (
                  <div className="dragCardWrapper">
                    <Card
                      key={res.product_id}
                      name={res.product_name}
                      thumbnail={res.thumbmail_image}
                      option={res.option}
                      score={res.score}
                      id={res.product_id}
                      hoverImg={res.hover_image}
                    />
                  </div>
                ))}
              </ul>
            </div>
          </div>

          <div className="alignAd">
            <CategoryImg />
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
