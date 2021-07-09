import React, { Component } from 'react';
import CardLarge from './CardLarge/CardLarge';
import Carousel from '../../components/Carousel/Carousel';
import Nav from '../../components/Nav/Nav';
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
      sloganImg: [],
      cardLarge: [],
      index: 0,
    };
  }

  componentDidMount() {
    fetch('data/CarouselData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          carouselImg: data.results.product_events,
          cardLarge: data.results.category_events,
          sloganImg: data.results.slogan_events,
        });
      });
  }

  handleClickPrev() {
    if (this.state.index === 0) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState({
        index: this.state.index - 1,
      });
    }

    console.log('this prev', this.state.index);
  }

  handleClickNext() {
    if (this.state.index === 3) {
      this.setState({
        index: 3,
      });
    } else {
      this.setState({
        index: this.state.index + 1,
      });
    }
    console.log('this next', this.state.index);
  }

  render() {
    const { carouselImg, cardLarge, sloganImg } = this.state;

    return (
      <>
        <Nav />
        <main className="mainContainer">
          <div className="abc">
            <div className="slideBox">
              <ul
                className="slideFstWrapper"
                style={{
                  transform: `translateX(-${100 * this.state.index}vw)`,
                }}
              >
                {carouselImg.map(img => (
                  <Carousel key={img.product_id} img={img.image_url} />
                ))}
              </ul>
            </div>

            <div className="buttonWrapper">
              <i
                className="fas fa-chevron-left fa-4x"
                onClick={() => this.handleClickPrev()}
              ></i>
              <i
                className="fas fa-chevron-right fa-4x"
                onClick={() => this.handleClickNext()}
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
            sloganImg={this.state.sloganImg.image_url}
            description={this.state.sloganImg.slogan}
          />

          <div className="slideScd">드래그 슬라이드2</div>

          <CategoryImg />
        </main>
        <Footer />
      </>
    );
  }
}
