import React from 'react';

export const CardSkeleton = () => {
  return (
    <div className="app__main__skeleton_card_grid__card">
      <div className="app__main__skeleton_card_grid__card__image skeleton"></div>
      <div className="app__main__skeleton_card_grid__card__text">
        <div className="app__main__skeleton_card_grid__card__text__span skeleton"></div>
        <div className="app__main__skeleton_card_grid__card__text__span skeleton"></div>
      </div>
      <div className="app__main__skeleton_card_grid__card__button skeleton"></div>
    </div>
  );
};
