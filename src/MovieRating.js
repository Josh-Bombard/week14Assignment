import React, { useState } from 'react';
import StarRating from './StarRating'; // Import the StarRating component

const MovieRating = ({ name, description, averageRating, imageUrl }) => {
  const [userRating, setUserRating] = useState(averageRating);

  const handleRatingChange = (newRating) => {
    // Update the user's rating for the movie
    setUserRating(newRating);
  };

  return (
    <div className="movie">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Average Rating: {averageRating}</p>
      <p>Your Rating: {userRating}</p>
      <StarRating rating={userRating} onRatingChange={handleRatingChange} />
    </div>
  );
};

export default Movie;
