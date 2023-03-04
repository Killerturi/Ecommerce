import React from "react";
import Itemcard1 from "./Itemcard1";
import Itemcard2 from "./Itemcard2";
import { ItemDetail1, ItemDetail2 } from "./ItemDetails";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <Itemcard1 type={ItemDetail1} />
        <Itemcard2 type={ItemDetail2} heading={"TRENDING LAPTOPS | "} />
      </div>
    </>
  );
};

export default Home;
