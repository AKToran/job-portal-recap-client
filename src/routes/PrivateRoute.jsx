import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="h-40 flex items-center justify-center">
        <span className="loading loading-ball loading-xl"></span>
        <span className="loading loading-ball loading-xl"></span>
        <span className="loading loading-ball loading-xl"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivateRoute;
