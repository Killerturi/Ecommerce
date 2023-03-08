import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAuth = useSelector((store) => {
    return store.auth;
  });

  if (!isAuth.length > 0) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
