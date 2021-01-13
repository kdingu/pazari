import React from "react";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import useStyles from "./styles";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
  Dot,
  ImageWithZoom,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const temp =
  "https://images.unsplash.com/photo-1609860055885-5e8d8d00ad5e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";

const ImageCarousel = ({ images = [temp, temp, temp] }) => {
  const classes = useStyles();

  return (
    <CarouselProvider
      hasMasterSpinner={true}
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={images.length}
    >
      {/* main image */}
      <div style={{ position: "relative" }}>
        <Slider>
          {images.map((url, index) => (
            <Slide
              key={index}
              innerClassName={classes.innerClass}
              index={index}
            >
              <div>
                <Image src={url} />
              </div>
            </Slide>
          ))}
        </Slider>
        <span className={classes.arrowsWrapper}>
          <ButtonBack className={classes.buttonBack}>
            <ChevronLeft />
          </ButtonBack>
          <ButtonNext className={classes.buttonNext}>
            <ChevronRight />
          </ButtonNext>
        </span>
      </div>

      {/* thumbnails */}
      <div className={classes.thumbnailWrapper}>
        {images.map((url, index) => (
          <Dot
            key={index}
            className={classes.thumbnail}
            slide={index}
            style={{ backgroundImage: `url(${url})` }}
          />
        ))}
      </div>
    </CarouselProvider>
  );
};

export default ImageCarousel;
