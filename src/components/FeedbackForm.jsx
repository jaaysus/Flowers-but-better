import React from 'react';
import '../styles/FeedbackForm.css';

const FeedbackForm = () => {
  return (
    <div className="feedback-form">
      <h1 className="feedback-title">Send Feedback</h1>
      <textarea placeholder="Your feedback..." className="feedback-textarea"></textarea>
      <button className="send-button">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/223/223484.png" 
          alt="Send" 
          className="send-icon"
        />
      </button>
    </div>
  );
};

export default FeedbackForm;
