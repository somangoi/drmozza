import React, { Component } from 'react';
import CardLarge from './CardLarge/CardLarge';
import Carousel from '../../components/Carousel/Carousel';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import CategoryImg from '../../components/CategoryImg/CategoryImg';
import './Main.scss';

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      carouselImg: [],
      index: 0,
    };
  }

  componentDidMount() {
    fetch('data/CarouselData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          carouselImg: data.results.product_events,
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
    const { carouselImg } = this.state;

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
                  // console.log(`this.state`, this.state);
                  <Carousel key={img.product_id} img={img.image_url} />
                ))}
              </ul>
              {/* //GET/users */}
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
              <CardLarge />
            </ul>
          </div>
          <div className="slogan">
            <p>HOLEY WEDGE</p>
            <p>MAKES ME MELT-</p>
            <p>HOLY UNION OF MILK</p>
            <p>AND PATIENCE-</p>
            <p>WE WAIT, YOU AGE</p>
            <p>-ANNELIESZ</p>
            <img
              alt="cheese"
              src="https://images.unsplash.com/photo-1482977036925-e8fcaa643657?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
            />
          </div>
          <div className="slideScd">슬라이드2</div>
          <CategoryImg />
          <div className="cheeseAd">광고</div>
        </main>
        <Footer />
      </>
    );
  }
}
