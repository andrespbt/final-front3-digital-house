import React from 'react';

export const CardSkeleton = () => {
  return (
    <div
      className="skeleton-card"
      aria-label="skeletonCard"
    >
      <div className="skeleton-card__image skeleton"></div>
      <div className="skeleton-card__text">
        <div className="skeleton-text__span skeleton"></div>
        <div className="skeleton-text__span skeleton"></div>
      </div>
      <div className="skeleton-card__button skeleton"></div>
    </div>
  );
};
