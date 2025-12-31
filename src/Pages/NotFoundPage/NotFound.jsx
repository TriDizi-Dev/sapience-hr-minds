import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-404-wrapper">
        <span className="notfound-404-background">404</span>
        <div className="notfound-circle">
          <span className="notfound-circle-text">404</span>
        </div>
      </div>

      <h1 className="notfound-title">Page not found</h1>
      <p className="notfound-subtitle">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <div className="notfound-buttons">
        <button className="notfound-home-btn" onClick={() => navigate("/")}>
          🏠 Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
