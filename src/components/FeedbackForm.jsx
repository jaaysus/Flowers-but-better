import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/FeedbackForm.css';

const FeedbackForm = () => {
  const [review, setReview] = useState('');
  const [isFeedbackEditing, setIsFeedbackEditing] = useState(true);

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.users.currentUser); // Get current user from the state
  const reviews = useSelector(state => state.reviews.reviews); // Get all reviews from the state

  useEffect(() => {
    if (currentUser) {
      // Check if the currentUser has already submitted a review
      const existingReview = reviews.find(review => review.userId === currentUser.id);
      if (existingReview) {
        setReview(existingReview.phrase); // Set the existing review content
        setIsFeedbackEditing(false); // Set to false to show "Edit" and "Delete"
      }
    }
  }, [currentUser, reviews]); // Run the effect when currentUser or reviews change

  const handleSubmitReview = () => {
    if (review.trim() === '' || !currentUser) return; // Prevent submission if no review or user
    const newReview = {
      id: Date.now(), // Unique ID for the review
      name: currentUser.fullName,  // User's full name
      phrase: review,  // Review content
      userId: currentUser.id,  // User's ID
    };

    console.log('Submitting review:', newReview); // Log the review for debugging

    // Dispatch action to add review
    dispatch({
      type: 'ADD_REVIEW',
      payload: newReview,
    });

    setIsFeedbackEditing(false); // After submission, switch to the review display
  };

  const handleEdit = () => {
    setIsFeedbackEditing(true);
  };

  const handleDelete = () => {
    // Dispatch action to remove review based on the userId
    dispatch({
      type: 'REMOVE_REVIEW',
      payload: currentUser.id,  // Pass userId to remove the review
    });
    setReview(''); // Clear the review content
    setIsFeedbackEditing(true); // Reset to empty feedback form
  };

  return (
    <div className="feedback-form">
      <h1 className="feedback-title">{isFeedbackEditing ? 'Send Feedback' : 'Your Review'}</h1>
      {isFeedbackEditing ? (
        <>
          <textarea
            placeholder="Your feedback..."
            className="feedback-textarea"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
          <button className="send-button" onClick={handleSubmitReview}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/223/223484.png"
              alt="Send"
              className="send-icon"
            />
          </button>
        </>
      ) : (
        <div className="review-display">
          <p>{review}</p>
          <div className="review-actions">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
