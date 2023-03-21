import { Discount } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./cart.css";

const Checkout = (props) => {
  const { cartItemData } = props;

  const { item } = useSelector((state) => {
    return state.ItemNo;
  });

  const { amount } = useSelector((state) => {
    return state.price;
  });

  const { offer } = useSelector((state) => {
    return state.Discount;
  });

  // console.log(typeof offer);

  const finalPrice = cartItemData
    .map((val) => val.price)
    .reduce((a, b) => {
      return b + a;
    }, 0);

  const finalDiscount = (finalPrice * 31) / 100;
  const totalAmount = (
    (finalPrice - finalDiscount - offer + amount) *
    70
  ).toFixed();
  // console.log(totalAmount);

  // console.log(parseInt(finalDiscount + offer) * 70);
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
            <span className="font-medium">
              {cartItemData.length + item} Item
            </span>{" "}
            )
          </p>
          <p className="font-medium">₹{(finalPrice + amount) * 70}</p>
        </div>
        <div className="cart_total px-3 py-2">
          <p>Discount</p>
          <p className="text-red-700">
            − ₹{((finalDiscount + offer) * 70).toFixed()}
          </p>
        </div>
        <div className="cart_total px-3 py-2">
          <p>Delivery Charges</p>
          <p>Free</p>
        </div>
        <hr />
        <div className="cart_total px-3 py-2">
          <p className="font-bold text-2xl">Total Amount</p>
          <p className="font-bold text-xl">₹{totalAmount}</p>
        </div>
        <hr />
        <div>
          <button className="w-full bg-orange-500 cursor-pointer mt-2 py-2 text-xl text-white">
            PLACE ORDER
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
