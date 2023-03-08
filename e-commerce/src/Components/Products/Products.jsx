import { useSelect } from "@mui/base";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { getLoading } from "../Redux/Auth/auth";
import Product from "./Product";

const Products = ({ typeOfProduct }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getAllData = async () => {
    setLoading(true);

    try {
      const res = await axios
        .get(`https://dummyjson.com/products/category/${typeOfProduct}`)
        .then((data) => {
          setData(data.data.products);
          setLoading(false);
          setError(false);
        });
    } catch (error) {
      setError(true);
    }
  };

  // console.log(error);

  useEffect(() => {
    getAllData();
  }, [typeOfProduct]);

  console.log(data);

  if (error) {
    return (
      <h1 className="w-full font-bold text-2xl text-center p-4 text-red-400">
        Some thing went wrong........
      </h1>
    );
  }

  return (
    <>
      {loading ? (
        <div className="flex justify-center h-52 pt-8">
          <div>
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              // width="96"
              visible={true}
            />
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-2xl pl-4 pt-4 font-bold">
            {typeOfProduct.toUpperCase()}
          </h1>
          <div className="flex   justify-around p-8 gap-4 ">
            {data.map((val) => {
              return <Product data={val} typeOfProduct={typeOfProduct} />;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Products;
