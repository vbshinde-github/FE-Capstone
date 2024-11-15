import React from "react";

import { testimonialData } from "../Constants";

function Testimonials() {
  // display testimonial cards
  const displayTestimonialCard = (item) => {
    return (
      <div key={item.name} className="col-12 col-md-4 mt-3 mt-md-0">
        <div className="testimonial-card">
          <div className="row">
            <div className="col-8">
              <h3>{item.name}</h3>
            </div>
            <div className="col-4 text-right">
              <h3 className="text-tomato">{item.rating} / 5</h3>
            </div>
          </div>
          <p className="mt-3">{item.review}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="testimonial-section">
      <div className="container">
        <h2 className="text-center">Testimonials</h2>
        <div className="row mt-4">
          {testimonialData?.map((item) => {
            return displayTestimonialCard(item);
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
