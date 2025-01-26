import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/FeedbackForm.css';

const FeedbackForm = () => {
  const [review, setReview] = useState('');
  const [editing, setEditing] = useState(true);
  const [currentReview, setCurrentReview] = useState(null);

  const currentUser = useSelector((state) => state.users.currentUser);
  const reviews = useSelector((state) => state.reviews || []); // Fallback to an empty array
  const userId = currentUser ? currentUser.id : null;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId && Array.isArray(reviews)) {
      const existingReview = reviews.find((review) => review.userId === userId);
      if (existingReview) {
        setCurrentReview(existingReview);
        setEditing(false); // Display the review instead of the form
      }
    }
  }, [userId, reviews]);

  const handleAddReview = () => {
    if (!userId || review.trim() === '') return;

    const newReview = {
      id: Date.now(),
      name: currentUser ? currentUser.name : 'User',
      phrase: review,
      userId,
    };

    dispatch({
      type: 'ADD_REVIEW',
      payload: newReview,
    });

    setCurrentReview(newReview);
    setEditing(false);
    setReview('');
  };

  const handleEdit = () => {
    setEditing(true);
    setReview(currentReview.phrase);
  };

  const handleDelete = () => {
    if (currentReview) {
      dispatch({
        type: 'REMOVE_REVIEW',
        payload: currentReview.id,
      });
      setCurrentReview(null);
      setReview('');
      setEditing(true);
    }
  };

  return (
    <div className="feedback-form">
      <h1 className="feedback-title">{editing ? 'Send Feedback' : 'Your Review'}</h1>
      {editing ? (
        <>
          <textarea
            placeholder="Your feedback..."
            className="feedback-textarea"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
          <button className="send-button" onClick={handleAddReview}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/223/223484.png"
              alt="Send"
              className="send-icon"
            />
          </button>
        </>
      ) : currentReview ? (
        <div className="review-display">
          <p>{currentReview.phrase}</p>
          <div className="review-actions">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FeedbackForm;
