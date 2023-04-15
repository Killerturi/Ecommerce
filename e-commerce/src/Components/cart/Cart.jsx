import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import "./cart.css";
import { RotatingLines } from "react-loader-spinner";
import { cartLength } from "../Redux/Auth/auth";
import { useSelector } from "react-redux";

const Cart = () => {
  /*  const { id } = useParams();
  console.log(id); */

  const { cartData } = useSelector((state) => {
    return state.AddData;
  });
  console.log(cartData, "hi");

  const navigate = useNavigate();

  return (
    <>
      {cartData.length > 0 ? (
        <div className="flex m-2  gap-4">
          <div className="cartItem">
            <section>
              <h1 className="text-3xl p-4 font-bold">Shopping Cart</h1>
            </section>
            <hr />
            {cartData.map((val, index) => {
              const {
                thumbnail,
                title,
                description,
                price,
                discountPercentage,
                id,
                qty,
              } = val;
              return (
                <CartItem
                  key={id}
                  title={title}
                  images={thumbnail}
                  price={price}
                  discountPercentage={discountPercentage}
                  id={id}
                  qty={qty}
                />
              );
            })}
          </div>
          <div className="checkout">
            <Checkout cartData={cartData} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col jutify-center items-center mb-20 gap-2">
          <img
            src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
            alt=""
            className="cart_blank_img"
          />
          <h1 className="text-xl">Your cart is empty!</h1>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate("/")}
          >
            Shop now
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
