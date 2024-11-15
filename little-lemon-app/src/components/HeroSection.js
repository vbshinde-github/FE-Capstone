import React from "react";
import { useNavigate } from "react-router-dom";

import foodImg from "../images/food-img1.jpg";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-8">
            <div className="hero-section-content">
              <h1 className="text-yellow hero-heading">Little Lemon</h1>
              <h2 className="text-white mt-2">Chicago</h2>
              <p className="text-white mt-3">
                We are family owned Meditarranean restaurant, focused on
                traditional recipes served with a moder twist.
              </p>
              <button
                type="button"
                className="btn-primary mt-3 text-bold"
                onClick={() => {
                  navigate("/booking");
                }}
              >
                Reserve Table
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
            <img src={foodImg} alt="Restaurant Food" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
