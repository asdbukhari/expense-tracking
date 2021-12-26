import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slideShowImages from "../../../data/images";

const SlideShow = () => {
  const properties = {
    duration: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    indicators: true,
    arrows: false,
    pauseOnHover: true,
  };
  return (
    <div>
      <Fade {...properties}>
        {slideShowImages.map((slide, index) => {
          return (
            <div className="each-slide" key={index}>
              <div
                style={{
                  backgroundImage: `url(${slide.url})`,
                  height: "500px",
                }}
              >
                <span>{slide.caption}</span>
              </div>
            </div>
          );
        })}
      </Fade>
    </div>
  );
};

export default SlideShow;
