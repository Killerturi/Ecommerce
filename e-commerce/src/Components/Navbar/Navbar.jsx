import React, { useState } from "react";
import "./navbar.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import Grocery from "../Pics/pic1.png";
import Mobile from "../Pics/pic2.png";
import Fashion from "../Pics/pic3.png";
import Laptop from "../Pics/pic4.jpg";
import Home from "../Pics/pic5.png";
import Furniture from "../Pics/pic6.png";
import Skincare from "../Pics/pic7.png";
import Fragrance from "../Pics/pic8.jpg";
import Motorcycle from "../Pics/pic9.png";

const Navbar = () => {
  const [auth, setAuth] = useState(false);

  return (
    <>
      <nav className="Navbar">
        <div className="nav_top">
          <div className="nav_top_right">
            <div>
              <ShoppingBasketOutlinedIcon className="logo" />
            </div>
            <div className="location_section">
              <LocationOnOutlinedIcon />
              <span>
                delevier to
                <br />
                your address
              </span>
            </div>
          </div>
          <div className="nav_top_mid">
            <input type="search" placeholder="serach...." />
            <SearchIcon className="search_icon" />
          </div>
          <div className="nav_top_left">
            <FavoriteBorderIcon className="icons" />
            <ShoppingCartIcon className="icons" />
            <div className="login_section">
              {!auth ? (
                <button
                  type="button"
                  class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Login
                </button>
              ) : (
                <select>
                  <option>hi</option>
                  <option>Setting</option>
                  <option>WhisList</option>
                  <option>Logout</option>
                </select>
              )}
            </div>
          </div>
        </div>
        <div className="nav_bottom">
          <div className="nav_bottom_img_conatiner">
            <img src={Grocery} alt="" className="nav_bottom_img" />
            <span>Grocery</span>
          </div>
          <div className="nav_bottom_img_conatiner">
            <img src={Mobile} alt="" className="nav_bottom_img" />
            <span>Mobiles</span>
          </div>
          <div className="nav_bottom_img_conatiner">
            <img src={Fashion} alt="" className="nav_bottom_img" />
            <div className="dropdown">
              <span className="dropbtn">
                Fashion <ExpandMoreOutlinedIcon />
              </span>
              <div className="dropdown-content">
                <div className="dropdown-content_women">
                  <h3>
                    <u>Women</u>
                  </h3>
                  <a href="#">Tops</a>
                  <a href="#">Women Dresses</a>
                  <a href="#">Women Shoes</a>
                  <a href="#">Women Watches</a>
                  <a href="#">Women Bags</a>
                  <a href="#">Women Jewllery</a>
                </div>
                <div className="dropdown-content_men">
                  <h3>
                    <u>Men</u>
                  </h3>
                  <a href="#">Men Shirt</a>
                  <a href="#">Men Shoes</a>
                  <a href="#">Men Watches</a>
                </div>
              </div>
            </div>
          </div>
          <div className="nav_bottom_img_conatiner">
            <img src={Laptop} alt="" className="nav_bottom_img" />
            <span>Laptops</span>
          </div>
          <div className="nav_bottom_img_conatiner">
            <img src={Home} alt="" className="nav_bottom_img" />
            <span>Home</span>
          </div>
          <div className="nav_bottom_img_conatiner">
            <img src={Furniture} alt="" className="nav_bottom_img" />
            <span>Furniture</span>
          </div>
          <div className="nav_bottom_img_conatiner">
            <img src={Skincare} alt="" className="nav_bottom_img" />
            <span>Skincare</span>
          </div>
          <div className="nav_bottom_img_conatiner">
            <img src={Fragrance} alt="" className="nav_bottom_img" />
            <span>Fragrance</span>
          </div>
          <div className="nav_bottom_img_conatiner">
            <img src={Motorcycle} alt="" className="nav_bottom_img" />
            <span>Motorcycle</span>
          </div>
        </div>
        <hr />
      </nav>
    </>
  );
};

export default Navbar;
