import React, { useEffect } from "react";
import Itemcard1 from "./Itemcard1";
import Itemcard2 from "./Itemcard2";
import Itemcard3 from "./Itemcard3";
import {
  ItemDetail1,
  ItemDetail10,
  ItemDetail2,
  ItemDetail3,
  ItemDetail4,
  ItemDetail7,
  ItemDetail8,
  ItemDetails5,
  ItemDetails6,
  ItemDetails9,
} from "./ItemDetails";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className="homeContainer">
        <Itemcard1 type={ItemDetail1} />
        <Itemcard2 type={ItemDetail2} heading={"TRENDING LAPTOPS | "} />
        <Itemcard1 type={ItemDetail10} />
        <Itemcard3
          type={ItemDetail3}
          heading={"TRENDING LIGHTS | "}
          image={
            "https://www.reliancedigital.in/medias/BPL-BB18RG0A-CDL-REGULAR-LED-BULB-491902793-23?context=bWFzdGVyfGltYWdlc3wyMzQ3OHxpbWFnZS9qcGVnfGltYWdlcy9oZTIvaGYyLzk2NzY0Njc3NjUyNzguanBnfDBiOGM0ZDZhMDJlNDU5YTg5Y2ZhYzgxZTA5NTJiYjMyMWIzZTAxNTA0OTJjZGZhNGFiZTE3Zjg5YWY1YmIwODQ"
          }
        />
        <hr />
        <Itemcard3
          type={ItemDetail4}
          heading={"TRENDING AUTOMOTIVE | "}
          image={
            "https://static.wixstatic.com/media/69684e_7f2d5cb6b182408dac92da69a8aa2001~mv2.png/v1/fill/w_640,h_624,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/69684e_7f2d5cb6b182408dac92da69a8aa2001~mv2.png"
          }
        />
        <Itemcard1 type={ItemDetail7} />
        <Itemcard3
          type={ItemDetails5}
          heading={"TRENDING SUNGLASSES | "}
          image={
            "https://thumbs.dreamstime.com/z/summer-sale-offer-banner-cool-sunglasses-white-background-illustration-118363026.jpg"
          }
        />
        <Itemcard1 type={ItemDetail8} />
        <Itemcard3
          type={ItemDetails6}
          heading={"TRENDING SMARTPHONES | "}
          image={
            "https://previews.123rf.com/images/stockertop/stockertop1707/stockertop170700048/81296992-big-summer-discounts-sale-banner-template-design-smartphone-bright-ribbon-and-confetti-banner-with-y.jpg"
          }
        />
        <hr />
        <Itemcard3
          type={ItemDetails9}
          heading={"TRENDING MENS-SHIRTS | "}
          image={
            "https://www.doubletwo.ie/media/weltpixel/owlcarouselslider/images/e/n/end-of-season-sale-mobile-banner.jpg"
          }
        />
        <hr />
        <p className="w-full text-center cursor-pointer mt-4 my-2 text-gray-400 border-none ">
          View All
        </p>
      </div>
    </>
  );
};

export default Home;
