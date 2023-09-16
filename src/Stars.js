import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const maxRating = 5;

 //create a function that pushes the number of rating selected while clicking a star 
  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div className="movie-rating">

      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= rating ? 'filled' : ''}`}
            onClick={() => handleStarClick(star)}
          >
            &#9733; {/* Unicode star character */}
          </span>
        ))}
      </div>
      <p>Your Rating: {rating} out of {maxRating}</p>
    </div>
  );
};

export default StarRating;

