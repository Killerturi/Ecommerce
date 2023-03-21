import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LastPage = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 1500);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="lastpage">
        <img
          src="https://static.vecteezy.com/system/resources/previews/006/900/704/original/green-tick-checkbox-illustration-isolated-on-white-background-free-vector.jpg"
          alt=""
        />

        <h1 className="font-bold text-xl mb-8">
          Your order has been placed successfully
        </h1>
      </div>
    </>
  );
};

export default LastPage;
