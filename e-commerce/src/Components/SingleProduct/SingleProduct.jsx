import axios from "axios";
import "./singleProduct.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { RotatingLines } from "react-loader-spinner";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { toast } from "react-toastify";

const SingleProduct = (props) => {
  const { typeOfProduct } = props;
  const { id } = useParams();
  const [singleData, setSingleData] = useState([]);
  const PRICE = singleData.price * 80;
  const MRP = PRICE - (PRICE * singleData.discountPercentage) / 100;
  var navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  console.log(singleData);

  const getSingleData = () => {
    setLoading(true);
    const res = axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((data) => {
        setSingleData(data.data);
        setLoading(false);
      });
  };

  const postSingleData = async (data) => {
    console.log(data);
    try {
      let response = await axios.post(
        `https://rus-digital-televisions.onrender.com/cart`,
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data;
    } catch (error) {
      console.log(
        "in the postSingleData function and error is :- ",
        error.response.data
      );
    }
  };

  useEffect(() => {
    getSingleData();
  }, [typeOfProduct]);

  // console.log(IMAGE);

  const handlePost = (data) => {
    let newData = { ...data };

    postSingleData(newData).then((res) => {
      toast.success(" Item add to cart Successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        navigate("/cart");
      }, 700);
    });
  };

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
          <main className="flex m-2 flex gap-6  mb-4">
            <section className="w-92 flex flex-col items-center pl-6">
              <div className="w-full border p-4 singProduct_img ">
                <img src={singleData.thumbnail} alt="" />
              </div>
              <div className="flex  gap-2 mt-4">
                <button
                  className="single_btn bg-orange-400"
                  onClick={() => handlePost(singleData)}
                >
                  <ShoppingCartIcon />
                  Add to cart
                </button>
                <Link to="/address">
                  <button className="single_btn bg-orange-600">
                    <ElectricBoltIcon /> Buy Now
                  </button>
                </Link>
              </div>
            </section>
            <section className="w-full ml-2 ">
              <section>
                <p className="font-bold pb-2">
                  {singleData.title},{singleData.description}
                </p>
                <p className="pb-2 ">
                  <span className="border px-1 text-xs text-center text-white bg-orange-400  ">
                    {singleData.rating}⭐
                    {/* <StarBorderIcon  className="star_icon"/> */}
                  </span>
                  <span className="pl-2 text-gray-400">
                    {(singleData.rating * 1100).toFixed()} Ratings &{" "}
                    {(singleData.rating * 211).toFixed()} Reviews
                  </span>
                </p>
                <hr />
                <section className="flex gap-4 items-center my-2">
                  <p className="font-bold text-3xl">₹{MRP.toFixed()}</p>
                  <p className="line-through text-gray-400 font-medium text-xl">
                    ₹{singleData.price * 75}
                  </p>
                  <p className="text-orange-600 font-medium">
                    {singleData.discountPercentage}% Off
                  </p>
                </section>
                <p className="pb-2">
                  Inclusive of all taxes
                  <br />
                  <span className="font-medium">EMI</span> starts at ₹908. No
                  Cost EMI available
                  <span className="text-blue-400 cursor-pointer">
                    EMI options
                  </span>
                </p>
                <hr />
                <section className="my-2">
                  <p className="pb-2 pl-2 font-bold text-xl">
                    Available offers
                  </p>
                  <ul>
                    <li>
                      <LocalOfferIcon className="offer_icon" />
                      <span className="offer_text">Bank Offer</span> 5% Cashback
                      on Flipkart Axis Bank Card
                      <span className="text-blue-700 font-medium cursor-pointer pl-2">
                        T&C
                      </span>
                    </li>
                    <li>
                      <LocalOfferIcon className="offer_icon" />
                      <span className="offer_text">Partner Offer</span> Sign up
                      for Flipkart Pay Later and get Flipkart Gift Card worth up
                      to ₹1000*.
                      <span className="text-blue-700 font-medium cursor-pointer pl-2">
                        Know More
                      </span>
                    </li>
                    <li>
                      <LocalOfferIcon className="offer_icon" />
                      <span className="offer_text">Partner Offer</span> Buy this
                      product and get upto ₹500 off{" "}
                      <span className="text-blue-700 font-medium cursor-pointer pl-2">
                        Know More
                      </span>
                    </li>
                    <li>
                      <EventAvailableIcon className="offer_icon" />
                      <span className="offer_text">
                        No cost EMI ₹4,500/month.
                      </span>
                      Standard EMI also available
                      <span className="text-blue-700 font-medium cursor-pointer pl-2">
                        View Plans
                      </span>
                    </li>
                    <li>
                      <LocalOfferIcon className="offer_icon" />
                      <span className="offer_text"> Special Price</span> Get
                      extra ₹2000 off (price inclusive of cashback/coupon)
                      <span className="text-blue-700 font-medium cursor-pointer pl-2">
                        T&C
                      </span>
                    </li>
                    <li>
                      <LocalOfferIcon className="offer_icon" />
                      <span className="offer_text"> Partner Offer</span> Shop
                      With Flipkart Pay Later & stand a chance to win ₹5,000
                      Gift Card* during the offer period
                      <span className="text-blue-700 font-medium cursor-pointer pl-2">
                        Know More
                      </span>
                    </li>
                    <li>
                      <LocalOfferIcon className="offer_icon" />
                      <span className="offer_text"> Partner Offer</span>{" "}
                      Purchase now & get a surprise cashback coupon till
                      November 2023.
                      <span className="text-blue-700 font-medium cursor-pointer pl-2">
                        Know More
                      </span>
                    </li>
                  </ul>
                </section>
              </section>
            </section>
          </main>
        </>
      )}
    </>
  );
};

export default SingleProduct;
