import React, { useEffect, useState } from "react";
import "./cart.css";
import { toast } from "react-toastify";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";
import { useDispatch } from "react-redux";
import {
  getDecDiscount,
  getDecItem,
  getDecPrice,
  getIncDiscount,
  getIncItem,
  getIncPrice,
} from "../Redux/Cart/cart";

const CartItem = (props) => {
  const {
    images,
    title,
    description,
    price,
    discountPercentage,
    id,
    DeleteRequest,
  } = props;
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  let discount = (price * 31) / 100;

  console.log(typeof discount);

  const handleInc = () => {
    setCount(count + 1);
    dispatch(getIncItem());
    dispatch(getIncPrice(price));
    dispatch(getIncDiscount(discount));
  };
  const handleDec = () => {
    if (count > 1) {
      // console.log(number);
      setCount(count - 1);
      dispatch(getDecItem());
      dispatch(getDecPrice(price));
      dispatch(getDecDiscount(discount));
    }
  };

  return (
    <div>
      <div key={id} className="p-4">
        <div className="flex gap-6 items-center ">
          <section>
            <img src={images} alt="" className=" cart_mg" />
          </section>
          <section>
            <p className=" pb-2 text-gray-700 font-semibold">
              {title},{description}
            </p>
            <section className="flex gap-4 items-center my-2">
              <p className="font-bold text-xl">₹{(price * 70).toFixed()}</p>
              <p className="line-through text-gray-400 font-medium text-lg">
                ₹{price * 75}
              </p>
              <p className="text-orange-600 font-medium">
                {discountPercentage}% Off
              </p>
            </section>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <button className="cartItem_btn bg-red-500" onClick={handleDec}>
                  <RemoveSharpIcon />
                </button>
                <p className="px-4 font-bold">{count}</p>
                <button
                  className="cartItem_btn bg-orange-400"
                  onClick={handleInc}
                >
                  <AddSharpIcon />
                </button>
              </div>
              <div>
                <p
                  className="font-medium hover:text-red-500 cursor-pointer "
                  onClick={() => {
                    DeleteRequest(id).then((response) => {
                      toast.success("Delete Item Successfully", {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                      });
                    });
                  }}
                >
                  Remove
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
