import React from "react";
import Heading from "./Heading";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";

const Itemcard3 = ({ type, heading, image }) => {
  return (
    <>
      <div className="itemcard3_Container mt-8 px-4">
        <Heading heading={heading} />
        <div className="flex gap-2 justify-between">
          <section className="ItemCard3_left">
            <img src={image} alt="" />
          </section>
          <div className="ItemCard3_right  px-8">
            <Swiper
              modules={[Autoplay,Navigation]}
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
                    <Link to={val.linked} style={{ textDecoration: "none" }}>
                      <section className="ItemCard3_img">
                        <img src={val.thumbnail} alt="img" />
                      </section>
                      <section className="ItemCard3_text pt-4">
                        <p className="text-sky-600 hover:text-red-700">
                          {val.title}
                        </p>

                        <p className="text-gray-600">
                          Deal Price :{" "}
                          <b className="text-black">₹{val.price * 50}</b>
                        </p>

                        <p className="text-gray-600  ">
                          MRP :{" "}
                          <span className="  line-through">
                            {val.price * 70}
                          </span>{" "}
                        </p>

                        <p className="text-gray-600">
                          You Save :{val.discountPercentage}%
                        </p>
                      </section>
                    </Link>
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Itemcard3;
