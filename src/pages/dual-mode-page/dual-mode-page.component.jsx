import React from "react";

import "./dual-mode-styles.scss";

import Card from "../../components/card/card.component";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CardSlider from "../../components/card-slider/card-slider.component";
import CheckboxList from "../../components/conversation-list-item/conversation-list-item.component";

class DualModePage extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="dual-mode-page" id="dual-mode-page">
        <Card className="main-card">
          <h4>See What's New</h4>
          <Carousel
            interval={1500}
            transitionTime={700}
            showIndicators={true}
            infiniteLoop={true}
            showStatus={false}
            showArrows={true}
            showThumbs={false}
            autoPlay={true}
            stopOnHover={true}
            swipeable={true}
            dynamicHeight={true}
            emulateTouch={true}
          >
            <div>
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
                alt="carousel-img-1"
              />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
                alt="carousel-img-2"
              />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1459679749680-18eb1eb37418?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
                alt="carousel-img-3"
              />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1543348750-466b55f32f16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
                alt="carousel-img-4"
              />
              <p className="legend">Legend 4</p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
                alt="carousel-img-5"
              />
              <p className="legend">Legend 5</p>
            </div>
          </Carousel>
          <h4>Previous Work</h4>
          <CardSlider />
          <h4>Previous Conversations</h4>
          <CheckboxList></CheckboxList>
        </Card>
      </div>
    );
  }
}

export default DualModePage;
