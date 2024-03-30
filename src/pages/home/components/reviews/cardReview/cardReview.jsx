// cardReview.js
import React from "react";
import "./cardReview.css";

const CardReview = ({ message }) => {
  return (
    <div className="cardReview">
      <span>Reseña anónima</span>
      <p className="cardReview__message">{message}</p>
    </div>
  );
};

export default CardReview;
