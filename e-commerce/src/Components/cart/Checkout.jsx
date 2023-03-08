import React from "react";
import "./cart.css";

const Checkout = (props) => {
  const { cartItemData } = props;

  const finalPrice = cartItemData
    .map((val) => val.price)
    .reduce((a, b) => {
      return b + a;
    }, 0);

  const finalDiscount = ((finalPrice * 31) / 100).toFixed();

  // console.log(finalDiscount * 70);
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
            <span className="font-medium">{cartItemData.length} Item</span> )
          </p>
          <p className="font-medium">₹{finalPrice * 70}</p>
        </div>
        <div className="cart_total px-3 py-2">
          <p>Discount</p>
          <p className="text-red-700">− ₹{(finalDiscount * 70).toFixed()}</p>
        </div>
        <div className="cart_total px-3 py-2">
          <p>Delivery Charges</p>
          <p>Free</p>
        </div>
        <hr />
        <div className="cart_total px-3 py-2">
          <p className="font-bold text-2xl">Total Amount</p>
          <p className="font-bold text-xl">
            ₹{(finalPrice - finalDiscount) * 70}
          </p>
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
