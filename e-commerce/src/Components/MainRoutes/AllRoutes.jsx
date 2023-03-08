import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../cart/Cart";
import Home from "../Pages/Home";
import Products from "../Products/Products";
import LogIn from "../Signup-SignIn/LogIn";
import SignUp from "../Signup-SignIn/Signup";
import SingleProduct from "../SingleProduct/SingleProduct";
import PrivateRoute from "./PrivateRoute";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/groceries"
          element={
            <PrivateRoute>
              <Products typeOfProduct="groceries" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/groceries/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="groceries" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/smartphones"
          element={
            <PrivateRoute>
              <Products typeOfProduct="smartphones" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/smartphones/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="smartphones" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/laptops"
          element={
            <PrivateRoute>
              <Products typeOfProduct="laptops" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/laptops/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="laptops" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/fragrances"
          element={
            <PrivateRoute>
              <Products typeOfProduct="fragrances" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/fragrances/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="fragrances" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/skincare"
          element={
            <PrivateRoute>
              <Products typeOfProduct="skincare" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/skincare/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="skincare" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/home-decoration"
          element={
            <PrivateRoute>
              <Products typeOfProduct="home-decoration" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/home-decoration/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="home-decoration" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/furniture"
          element={
            <PrivateRoute>
              <Products typeOfProduct="furniture" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/furniture/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="furniture" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/tops"
          element={
            <PrivateRoute>
              <Products typeOfProduct="tops" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/tops/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="tops" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/womens-dresses"
          element={
            <PrivateRoute>
              <Products typeOfProduct="womens-dresses" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/womens-dresses/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="womens-dresses" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/womens-shoes"
          element={
            <PrivateRoute>
              <Products typeOfProduct="womens-shoes" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/womens-shoes/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="womens-shoes" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/womens-watches"
          element={
            <PrivateRoute>
              <Products typeOfProduct="womens-watches" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/womens-watches/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="womens-watches" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/womens-bags"
          element={
            <PrivateRoute>
              <Products typeOfProduct="womens-bags" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/womens-bags/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="womens-bags" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/womens-jewellery"
          element={
            <PrivateRoute>
              <Products typeOfProduct="womens-jewellery" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/womens-jewellery/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="womens-jewellery" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/mens-shirts"
          element={
            <PrivateRoute>
              <Products typeOfProduct="mens-shirts" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/mens-shirts/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="mens-shirts" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/mens-shoes"
          element={
            <PrivateRoute>
              <Products typeOfProduct="mens-shoes" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/mens-shoes/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="mens-shoes" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/mens-watches"
          element={
            <PrivateRoute>
              <Products typeOfProduct="mens-watches" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/mens-watches/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="mens-watches" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/sunglasses"
          element={
            <PrivateRoute>
              <Products typeOfProduct="sunglasses" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/sunglasses/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="sunglasses" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/automotive"
          element={
            <PrivateRoute>
              <Products typeOfProduct="automotive" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/automotive/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="automotive" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/motorcycle"
          element={
            <PrivateRoute>
              <Products typeOfProduct="motorcycle" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/motorcycle/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="motorcycle" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/lighting"
          element={
            <PrivateRoute>
              <Products typeOfProduct="lighting" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/lighting/:id"
          element={
            <PrivateRoute>
              <SingleProduct typeOfProduct="lighting" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
