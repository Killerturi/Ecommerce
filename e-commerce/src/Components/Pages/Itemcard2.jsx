import React from "react";
import Heading from "./Heading";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";

const Itemcard2 = ({ type, heading }) => {
  return (
    <>
      <div className="itemcard2_Container">
        <Heading />
        <div>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 4000 }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {type.map((val) => (
              <div>
                <SwiperSlide>
                  <Link to={val.linked}>
                    <section>
                      <img src={val.img} alt="img" />
                    </section>
                    <section className="ItemCard2_text">
                    <span>{val.name}</span>
                    <br />
                    <span>
                      Deal Price : <span>{val.price}</span>
                    </span>
                    <br />
                    <span>
                      MRP : <span>{val.mrp}</span>
                    </span>
                    <br />
                    <span>
                      You Save : <span>{val.discount}</span>
                    </span>
                    </section>
                  </Link>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Itemcard2;
