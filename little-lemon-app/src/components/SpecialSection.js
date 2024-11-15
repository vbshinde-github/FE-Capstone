import React from "react";

import { specialsFoodData } from "../Constants";
import scooter from "../images/motorcycle.png";

function SpecialSection() {
  // display special cards
  const displaySpecialCard = (item) => {
    return (
      <div key={item.imageUrl} className="col-12 col-md-4 mt-3 mt-md-0">
        <div className="special-card">
          <img src={item.imageUrl} alt={item.imageUrl} />
          <div className="special-card-content">
            <div className="row">
              <div className="col-8">
                <h3>{item.dish}</h3>
              </div>
              <div className="col-4 text-right">
                <h3 className="text-tomato">{item.price}</h3>
              </div>
            </div>
            <p className="mt-5">{item.description}</p>
            <div className="btn-delivery mt-5 pt-3">
              Order a Delivery{" "}
              <img src={scooter} alt="vehicle" className="ms-2" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="special-section">
      <div className="container">
        <div className="row">
          <div className="col-7 align-content-center">
            <h2>This Week Specials!</h2>
          </div>
          <div className="col-5 text-right">
            <button type="button" className="btn-primary text-bold">
              Online Menu
            </button>
          </div>
        </div>
        <div className="row mt-5">
          {specialsFoodData?.map((item) => {
            return displaySpecialCard(item);
          })}
        </div>
      </div>
    </div>
  );
}

export default SpecialSection;
