import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/FeedbackForm.css';

const FeedbackForm = () => {
  const [review, setReview] = useState('');
  const [isFeedbackEditing, setIsFeedbackEditing] = useState(true);

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.users.currentUser);
  const reviews = useSelector(state => state.reviews.reviews);

  useEffect(() => {
    if (currentUser) {
      const existingReview = reviews.find(review => review.userId === currentUser.id);
      if (existingReview) {
        setReview(existingReview.phrase);
        setIsFeedbackEditing(false);
      }
    }
  }, [currentUser, reviews]);

  const handleSubmitReview = () => {
    if (review.trim() === '' || !currentUser) return;
    const newReview = {
      id: Date.now(),
      name: currentUser.fullName,
      phrase: review,
      userId: currentUser.id,
    };

    console.log('Submitting review:', newReview);// left it to debug account edit info undefined case

    dispatch({
      type: 'ADD_REVIEW',
      payload: newReview,
    });

    setIsFeedbackEditing(false);
  };

  const handleEdit = () => {
    setIsFeedbackEditing(true);
  };

  const handleDelete = () => {
    dispatch({
      type: 'REMOVE_REVIEW',
      payload: currentUser.id,
    });
    setReview('');
    setIsFeedbackEditing(true);
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
          <p id="review">{review}</p>
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
