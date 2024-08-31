import React from 'react';
import starIcon from './assets/star.svg';
import './StarRating.css';

export default function StarRating({ totalStars = 5, filledStars = 0 }) {
  const validFilledStars = Math.min(filledStars, totalStars);

  const stars = Array.from({ length: totalStars }, (_, index) => (
    <img
      key={index}
      src={starIcon}
      alt="star"
      className={`star ${index < validFilledStars ? 'filled' : ''}`}
    />
  ));

  return <div className="star-rating">{stars}</div>;
};
