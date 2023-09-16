import React from 'react';

const Review = ({ review }) => {
  return (
    <div>
      <br/>
    <li className="review">
      <h3>{review.reviewerName}</h3>
      <p>{review.comment}</p>
    </li>
    </div>
  );
};

export default Review;
