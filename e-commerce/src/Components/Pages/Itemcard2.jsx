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
        <Heading heading={heading} />
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
              <div className="ItemCard2_sliderSection">
                <SwiperSlide>
                  <Link to={val.linked} style={{ textDecoration: "none" }}>
                    <section className="ItemCard2_img">
                      <img src={val.img} alt="img" />
                    </section>
                    <section className="ItemCard2_text ">
                      <p className="text-sky-600 hover:text-red-700">
                        {val.name.slice(0, 50)}.....
                      </p>

                      <p className="text-gray-600">
                        Deal Price : <b className="text-black">₹{val.price}</b>
                      </p>

                      <p className="text-gray-600  ">
                        MRP : <span className="  line-through">{val.mrp}</span>{" "}
                      </p>

                      <p className="text-gray-600">You Save :{val.discount}</p>
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
