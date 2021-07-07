import React, { Component } from 'react';
import CardLarge from './CardLarge/CardLarge';
import Carousel from '../../components/Carousel/Carousel';
import './Main.scss';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      carouselImg: [],
    };
  }

  componentDidMount() {
    fetch('data/CarouselData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          carouselImg: data,
        });
      });
  }

  render() {
    const { carouselImg } = this.state;
    console.log(carouselImg);

    return (
      <>
        <div className="nav">네브 컴포넌트 자리</div>
        <body>
          <div className="slideFstWrapper">
            {carouselImg.map((img, idx) => {
              if (idx > 0) return;

              return (
                <Carousel
                  key={img.id}
                  title={img.title}
                  subtitile={img.subtitile}
                  img={img.src}
                />
              );
            })}
            {/* <div className="slideFst">슬라이드1</div> */}
          </div>
          <div className="abc">
            <div className="cardLargeWrapper">
              <CardLarge />
              <div className="cardComponent"></div>
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
