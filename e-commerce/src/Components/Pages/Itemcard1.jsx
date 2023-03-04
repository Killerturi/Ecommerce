import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Home.css";
import MainBanner from "../Pics/main-banner.jpg";
import Blog from "../Pics/blog-1.jpg";
import MainBanner2 from "../Pics/main-banner-1.jpg";

const Itemcard1 = ({ type }) => {
  return (
    <>
      <div className="itemcard1">
        <Slide>
          {type.map((val) => {
            return (
              <div>
                <img
                  src={val.img}
                  alt={val.caption}
                  className="itemcard1_img"
                />
              </div>
            );
          })}
        </Slide>
        <div className="card">
          <div className="card_images">
            <img src={Blog} alt="" className="card_img" />
          </div>
          <div className="card_images">
            <img src={MainBanner2} alt="" className="card_img" />
          </div>
          <div className="card_images">
            <img src={MainBanner} alt="" className="card_img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Itemcard1;
