import React from 'react';
import { CardSkeleton } from './CardSkeleton';

export const GridCardSkeleton = ({cardAmount}) => {
  return (
  <div className='app__main__skeleton_card_grid'>
    
    {
      [...Array(cardAmount)].map((x,i) => <CardSkeleton key={i}/>) 
    }
  </div>
  )
};
