import React, { useState } from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm';

//create a review list with a state of an empty array

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  // Function to add a new review to the list
  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="review-list">
      <h2>User Reviews</h2>
      <ReviewForm onSubmit={addReview} />
      <ul>
        {reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
