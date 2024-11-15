import React from "react";

function TestimonialCard(props) {
  return (
    <div className="testimonials-card">
      <h2>Rating: {props.rating} / 5 stars</h2>
      <h2>Name: {props.name}</h2>
      <p>Comment: {props.review}</p>
    </div>
  );
}

export default TestimonialCard;
