import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";

const Product = (props) => {
  const { data, typeOfProduct } = props;
  const { id, title, price, rating, brand, images, thumbnail } = data;

  const MRP = price * 75;
  const Price = (MRP * 40) / 100;

  const handleWish = (data) => {
    let newData = {};
    for (let i in data) {
      if (i === "id") {
        continue;
      }
      newData[i] = data[i];
    }
  };

  return (
    <>
      <div>
        <div className="flex gap-4 flex-col items-center  px-4 pt-4 product ">
          <Link
            to={`/${typeOfProduct}/${id}`}
            style={{ textDecoration: "none" }}
          >
            <section className="product_image">
              <img src={images[0]} alt="" />
            </section>
            <section className="flex flex-col  mt-2 ">
              <p className="text-blue-600 font-bold">{title}</p>
              <p className="text-gray-600">
                Price: <span className="text-black font-bold">₹{Price}</span>
              </p>
              <p className="text-gray-600">
                mrp:<span className="line-through">₹{MRP}</span>
              </p>
              <p className="text-gray-600">Rating: {rating}</p>
            </section>
          </Link>
        </div>
        <button
          className="whisList_btn bg-gray-100  font-bold hover:bg-gray-300 "
          onClick={() => handleWish(data)}
        >
          <FavoriteTwoToneIcon className="text-red-700" /> WishList
        </button>
      </div>
    </>
  );
};

export default Product;
