import React from 'react';

const Review = ({ review }) => {
  return (
    <li className="review">
      <br/>
      <h3>{review.reviewerName}</h3>
      <p>{review.comment}</p>
    </li>
  );
};

export default Review;
