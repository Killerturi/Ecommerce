import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./cart.css";

const Checkout = (props) => {
  const { cartData } = props;

  const TotalItem = cartData.map((val) => val.qty).reduce((a, b) => a + b, 0);
  const FINAL_PRICE = cartData
    .map((val) => val.price * val.qty)
    .reduce((a, b) => a + b, 0);

  const FINAL_DISCOUNT = cartData
    .map((val) => val.discountPercentage * val.qty)
    .reduce((a, b) => a + b, 0);

  const TOTAL_AMOUNT = ((FINAL_PRICE - FINAL_DISCOUNT) * 70).toFixed();

  return (
    <>
      <div className="p-2">
        <p className="font-bold text-gray-400 text-xl pb-2 pl-2">
          PRICE DETAILS
        </p>
        <hr />
        <div className="cart_total px-3 py-2">
          <p>
            Price(
            <span className="font-medium">{TotalItem} Item</span> )
          </p>
          <p className="font-medium">₹{FINAL_PRICE * 70}</p>
        </div>
        <div className="cart_total px-3 py-2">
          <p>Discount</p>
          <p className="text-red-700">− ₹{(FINAL_DISCOUNT * 70).toFixed()}</p>
        </div>
        <div className="cart_total px-3 py-2">
          <p>Delivery Charges</p>
          <p>Free</p>
        </div>
        <hr />
        <div className="cart_total px-3 py-2">
          <p className="font-bold text-2xl">Total Amount</p>
          <p className="font-bold text-xl">₹{TOTAL_AMOUNT}</p>
        </div>
        <hr />
        <div>
          <Link to="/address">
            <button className="w-full bg-orange-500 cursor-pointer mt-2 py-2 text-xl text-white">
              PLACE ORDER
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Checkout;
