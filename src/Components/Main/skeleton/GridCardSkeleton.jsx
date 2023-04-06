import React from 'react';
import { CardSkeleton } from './CardSkeleton';

export const GridCardSkeleton = ({ cardAmount }) => {
  return (
    <div className="skeleton-grid">
      {[...Array(cardAmount)].map((x, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
};
