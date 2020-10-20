import React from "react";

import "./card-slider.styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class CardSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000,
      centerMode: true,
      adaptiveHeight: true,
      pauseOnDotsHover: true,
      pauseOnFocus: true,
      pauseOnHover: true,
    };
    return (
      <Slider {...settings}>
        <li className="item-a">
          <div className="box-slider">
            <div className="slide-image">
              <img alt="1" src={require("../../E-slider-images/1.jpg")} />
              <div className="overlay">
                <a href="!#" className="buy-btn">
                  Buy Now
                </a>
              </div>
            </div>

            <div className="detail-box">
              <div className="type">
                <a href="!#">Rabbed Cardigan</a>
                <span> New Arrival</span>
              </div>
              <a className="price" href="!#">
                $24
              </a>
            </div>
          </div>
        </li>
        <li className="item-b">
          <div className="box-slider">
            <div className="slide-image">
              <img alt="2" src={require("../../E-slider-images/2.jpg")} />
              <div className="overlay">
                <a href="!#" className="buy-btn">
                  Buy Now
                </a>
              </div>
            </div>

            <div className="detail-box">
              <div className="type">
                <a href="!#">Rabbed Cardigan</a>
                <span> New Arrival</span>
              </div>
              <a className="price" href="!#">
                $32
              </a>
            </div>
          </div>
        </li>
        <li className="item-c">
          <div className="box-slider">
            <div className="slide-image">
              <img alt="3" src={require("../../E-slider-images/3.jpg")} />
              <div className="overlay">
                <a href="!#" className="buy-btn">
                  Buy Now
                </a>
              </div>
            </div>

            <div className="detail-box">
              <div className="type">
                <a href="!#">Rabbed Cardigan</a>
                <span> New Arrival</span>
              </div>
              <a className="price" href="!#">
                $26
              </a>
            </div>
          </div>
        </li>
        <li className="item-d">
          <div className="box-slider">
            <div className="slide-image">
              <img alt="4" src={require("../../E-slider-images/4.jpg")} />
              <div className="overlay">
                <a href="!#" className="buy-btn">
                  Buy Now
                </a>
              </div>
            </div>

            <div className="detail-box">
              <div className="type">
                <a href="!#">Rabbed Cardigan</a>
                <span> New Arrival</span>
              </div>
              <a className="price" href="!#">
                $43
              </a>
            </div>
          </div>
        </li>
        <li className="item-e">
          <div className="box-slider">
            <div className="slide-image">
              <img alt="5" src={require("../../E-slider-images/5.jpg")} />
              <div className="overlay">
                <a href="!#" className="buy-btn">
                  Buy Now
                </a>
              </div>
            </div>

            <div className="detail-box">
              <div className="type">
                <a href="!#">Rabbed Cardigan</a>
                <span> New Arrival</span>
              </div>
              <a className="price" href="!#">
                $35
              </a>
            </div>
          </div>
        </li>
        <li className="item-f">
          <div className="box-slider">
            <div className="slide-image">
              <img alt="6" src={require("../../E-slider-images/6.jpg")} />
              <div className="overlay">
                <a href="!#" className="buy-btn">
                  Buy Now
                </a>
              </div>
            </div>

            <div className="detail-box">
              <div className="type">
                <a href="!#">Rabbed Cardigan</a>
                <span> New Arrival</span>
              </div>
              <a className="price" href="!#">
                $23
              </a>
            </div>
          </div>
        </li>
        <li className="item-g">
          <div className="box-slider">
            <div className="slide-image">
              <img alt="7" src={require("../../E-slider-images/7.jfif")} />
              <div className="overlay">
                <a href="!#" className="buy-btn">
                  Buy Now
                </a>
              </div>
            </div>

            <div className="detail-box">
              <div className="type">
                <a href="!#">Rabbed Cardigan</a>
                <span> New Arrival</span>
              </div>
              <a className="price" href="!#">
                $28
              </a>
            </div>
          </div>
        </li>
        <li className="item-h">
          <div className="box-slider">
            <div className="slide-image">
              <img alt="8" src={require("../../E-slider-images/8.jfif")} />
              <div className="overlay">
                <a href="!#" className="buy-btn">
                  Buy Now
                </a>
              </div>
            </div>

            <div className="detail-box">
              <div className="type">
                <a href="!#">Rabbed Cardigan</a>
                <span> New Arrival</span>
              </div>
              <a className="price" href="!#">
                $29
              </a>
            </div>
          </div>
        </li>
      </Slider>
    );
  }
}

export default CardSlider;
