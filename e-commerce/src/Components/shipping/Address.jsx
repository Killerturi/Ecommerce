import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./address.css";
import { toast } from "react-toastify";

const Address = () => {
  const [details, setDetails] = useState({
    email: "",
    number: "",
    address: "",
    address2: "",
    city: "",
    zip: "",
  });
  const [payment, setpayment] = useState(false);
  const { email, number, address, address2, city, zip } = details;

  const textHandle = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const addressHandle = (e) => {
    e.preventDefault();
    if (email && number && address && address2 && city && zip) {
      setpayment(true);
      setDetails({
        email: "",
        number: "",
        address: "",
        address2: "",
        city: "",
        zip: "",
      });
      toast.success(" Address save successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.warning(" Fill the inputs", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    window.scroll(0, 205);
  }, []);

  return (
    <>
      <div className="address">
        <header className="header mx-3 rounded font-bold text-white pl-8 py-3">
          1. DELIVERY ADDRESS
        </header>
        <form className="p-6" onSubmit={addressHandle}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={textHandle}
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword4">Number</label>
              <input
                type="number"
                name="number"
                value={number}
                onChange={textHandle}
                className="form-control"
                id="inputPassword4"
                placeholder="Number"
              />
            </div>
          </div>
          <div className="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={textHandle}
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-group">
            <label for="inputAddress2">Address 2</label>
            <input
              type="text"
              name="address2"
              value={address2}
              onChange={textHandle}
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputCity">City</label>
              <input
                type="text"
                name="city"
                value={city}
                onChange={textHandle}
                className="form-control"
                id="inputCity"
              />
            </div>
            <div className="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>Andhra Pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Bihar</option>
                <option>Chhattisgarh</option>
                <option>Goa</option>
                <option>Haryana</option>
                <option>Jharkhand</option>
                <option>Punjab</option>
                <option>Tamil Nadu</option>
                <option>Uttar Pradesh</option>
                <option>West Bengal</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input
                type="number"
                name="zip"
                value={zip}
                onChange={textHandle}
                className="form-control"
                id="inputZip"
              />
            </div>
          </div>

          <button type="submit" className="address_btn bg-orange-400 rounded">
            SAVE AND DELIVERY HERE
          </button>
        </form>
        <div>
          <h1 className="header mx-3 rounded font-bold text-white pl-8 py-3">
            2. PAYMENT OPTIONS
          </h1>
          <div className={payment ? " blurs ml-1 my-3" : "payment_blur"}>
            <button
              type="submit"
              disabled
              className="address_btn blurs bg-orange-400 rounded px-3 ml-3 my-4 "
            >
              Upi
            </button>
            <button
              type="submit"
              disabled
              className="address_btn blurs bg-orange-400 rounded px-3 ml-3 my-4"
            >
              Debit / Credit Card
            </button>
            <button
              type="submit"
              disabled
              className="address_btn blurs bg-orange-400 rounded px-3 ml-3 my-4"
            >
              Net Banking
            </button>
            <Link to={payment ? "/lastpage" : ""}>
              <button
                type="button"
                className="address_btn bg-orange-400 rounded px-3 ml-3 my-4"
              >
                Cash On Delivery
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
