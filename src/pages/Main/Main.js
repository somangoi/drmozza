import React, { Component } from 'react';
import CardLarge from './CardLarge/CardLarge';
import Carousel from '../../components/Carousel/Carousel';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
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
        <div className="nav">네브 컴포넌트 자리</div>
        <body>
          <div className="slideBox">
            <ul
              className="slideFstWrapper"
              style={{
                transform: `translateX(-${100 * this.state.index}vw)`,
              }}
            >
              {carouselImg.map(img => {
                // console.log(`this.state`, this.state);
                return <Carousel key={img.product_id} img={img.image_url} />;
              })}
            </ul>
            {/* //GET/users */}
          </div>

          <div>
            <button onClick={() => this.handleClickPrev()}> prev </button>
            <button onClick={() => this.handleClickNext()}> next </button>
          </div>

          <div className="abc">
            <div className="cardLargeWrapper">
              <CardLarge />
            </div>
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
              src="https://images.unsplash.com/photo-1480951759438-f39a376462f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2098&q=80"
            />
          </div>
          <div className="slideScd">슬라이드2</div>
          <div className="cheeseAd">광고</div>
        </body>
        <div className="footer">푸터 자리</div>
      </>
    );
  }
}
