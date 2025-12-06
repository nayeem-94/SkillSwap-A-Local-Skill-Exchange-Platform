import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "./AuthProvider";

const PrivatRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Show loading for at least 5 seconds
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 750);

    return () => clearTimeout(timer);
  }, []);

  // Show spinner while either Firebase is loading or 5 seconds not finished
  if (loading || showLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivatRoute;
