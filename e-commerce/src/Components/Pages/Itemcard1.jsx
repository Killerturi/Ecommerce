import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Home.css";

const Itemcard1 = ({ type }) => {
  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export default Itemcard1;
