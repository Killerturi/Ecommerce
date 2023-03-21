import React, { useEffect, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLogout, removeName } from "../Redux/Auth/auth";
import { ToastContainer, toast } from "react-toastify";
// import { ToastContainer, toast } from "react-toast";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const authentication = useSelector((state) => {
    // console.log(state.auth, "hi");
    return state.auth;
  });

  const name = useSelector((state) => {
    return state.name;
  });

  const dispatch = useDispatch();
  const history = useNavigate();

  const logoutHandle = () => {
    dispatch(getLogout());
    dispatch(removeName());
    history("/login");
    toast.warn("Logout successfully,", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <nav className="Navbar">
        <div className="nav_top">
          <div className="nav_top_right">
            <Link to="/" className="link">
              <div>
                <h1 className="brand_name">Aj's shop</h1>
              </div>
            </Link>
          </div>
          <div className="nav_top_mid">
            <input type="search" placeholder="serach...." />
            <SearchIcon className="search_icon" />
          </div>
          <div className="nav_top_left">
            <div className="location_section">
              <LocationOnOutlinedIcon />
              <span>
                delevier to
                <br />
                your address
              </span>
            </div>
            <Link to="/cart" className="link cart">
              <span>Cart</span>
              <ShoppingCartIcon className="icons" />
            </Link>
            <div className="login_section">
              {!authentication.length > 0 ? (
                <Link to="/login">
                  <button
                    type="button"
                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Login
                  </button>
                </Link>
              ) : (
                <div className="dropdown pr-4">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Hi , {name}
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      whislist
                    </a>
                    <button className="dropdown-item" onClick={logoutHandle}>
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="nav_bottom text-center ">
          <div className="nav_bottom_img_conatiner">
            <Link to="/groceries" style={{ textDecoration: "none" }}>
              <img src={Grocery} alt="" className="nav_bottom_img" />
              <span>Grocery</span>
            </Link>
          </div>
          <div className="nav_bottom_img_conatiner">
            <Link to="/smartphones" style={{ textDecoration: "none" }}>
              <img src={Mobile} alt="" className="nav_bottom_img" />
              <span>Mobiles</span>
            </Link>
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
                  <Link style={{ textDecoration: "none" }} to="/tops">
                    Tops
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/womens-dresses">
                    Women Dresses
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/womens-shoes">
                    Women Shoes
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/womens-watches">
                    Women Watches
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/womens-bags">
                    Women Bags
                  </Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/womens-jewellery"
                  >
                    Women Jewllery
                  </Link>
                </div>
                <div className="dropdown-content_men">
                  <h3>
                    <u>Men</u>
                  </h3>
                  <Link style={{ textDecoration: "none" }} to="/mens-shirts">
                    Men Shirt
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/mens-shoes">
                    Men Shoes
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/mens-watches">
                    Men Watches
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="nav_bottom_img_conatiner">
            <Link to="/laptops" style={{ textDecoration: "none" }}>
              <img src={Laptop} alt="" className="nav_bottom_img" />
              <span>Laptops</span>
            </Link>
          </div>
          <div className="nav_bottom_img_conatiner">
            <Link to="home-decoration" style={{ textDecoration: "none" }}>
              <img src={Home} alt="" className="nav_bottom_img" />
              <span>Home</span>
            </Link>
          </div>
          <div className="nav_bottom_img_conatiner">
            <Link to="furniture" style={{ textDecoration: "none" }}>
              <img src={Furniture} alt="" className="nav_bottom_img" />
              <span>Furniture</span>
            </Link>
          </div>
          <div className="nav_bottom_img_conatiner">
            <Link to="skincare" style={{ textDecoration: "none" }}>
              <img src={Skincare} alt="" className="nav_bottom_img" />
              <span>Skincare</span>
            </Link>
          </div>
          <div className="nav_bottom_img_conatiner">
            <Link to="fragrances" style={{ textDecoration: "none" }}>
              <img src={Fragrance} alt="" className="nav_bottom_img" />
              <span>Fragrance</span>
            </Link>
          </div>
          <div className="nav_bottom_img_conatiner">
            <Link to="motorcycle" style={{ textDecoration: "none" }}>
              <img src={Motorcycle} alt="" className="nav_bottom_img" />
              <span>Motorcycle</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
