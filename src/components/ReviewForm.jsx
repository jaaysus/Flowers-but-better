import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../styles/reviewform.css";

const ReviewForm = () => {
  const [selectedRating, setSelectedRating] = useState("Satisfied");
  const [feedbackText, setFeedbackText] = useState("");
  const dispatch = useDispatch();

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    dispatch({
      type: "ADD_REVIEW",
      payload: { rating: selectedRating, text: feedbackText },
    });
    alert("Thank you for your feedback!");
  };

  return (
    <div className="review-form">
    <div className="panel-container">
      <strong>How satisfied are you with our customer support performance?</strong>
      <div className="ratings-container">
        {["Unhappy", "Neutral", "Satisfied"].map((rating) => (
          <div
            key={rating}
            className={`rating ${selectedRating === rating ? "active" : ""}`}
            onClick={() => handleRatingClick(rating)}
          >
            <img
              src={`https://image.flaticon.com/icons/svg/187/${
                rating === "Unhappy" ? "187150" : rating === "Neutral" ? "187136" : "187133"
              }.svg`}
              alt={rating}
            />
            <small>{rating}</small>
          </div>
        ))}
      </div>
      <textarea
        placeholder="Write your feedback here..."
        value={feedbackText}
        onChange={(e) => setFeedbackText(e.target.value)}
        style={{ width: "100%", height: "80px", margin: "10px 0", padding: "10px" }}
      />
      <button className="btn" onClick={handleSubmit}>
        Send Review
      </button>
    </div>
    </div>
  );
};

export default ReviewForm;
