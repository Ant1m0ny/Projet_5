import React from 'react';
import starIconFill from '../../assets/images/starFull.png';
import starIconEmpty from '../../assets/images/starEmpty.png';
import './StarRating.scss';

export default function StarRating({ totalStars = 5, filledStars = 0 }) {
  const validFilledStars = Math.min(filledStars, totalStars);

  const stars = Array.from({ length: totalStars }, (_, index) => (
    <img
      key={index}
      src={index < validFilledStars ? starIconFill : starIconEmpty}
      alt="star" />
  ));

  return <div className="star-rating">{stars}</div>;
};
