import React, { useState } from 'react';

const ReviewForm = ({ onSubmit }) => {
  const [reviewData, setReviewData] = useState({
    reviewerName: '',
    rating: 5, // Default rating of 5
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewData({ ...reviewData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(reviewData);
    // Clear form fields after submission
    setReviewData({
      reviewerName: '',
      comment: '',
    });
  };

  return (
    <div className="review-form">
      <h5>Add Your Review</h5>
      <form onSubmit={handleSubmit}>
        <label>
          Your Name:
          <input
            type="text"
            name="reviewerName"
            value={reviewData.reviewerName}
            onChange={handleChange}
            required
          />
        </label>
        &nbsp;
        &nbsp;
        <label>
          Comment:
          <textarea
            name="comment"
            value={reviewData.comment}
            onChange={handleChange}
            required
          />
        </label>
        <div className=''>
          <br/>
        <button className='btn btn-primary' type="submit">Submit Review</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
