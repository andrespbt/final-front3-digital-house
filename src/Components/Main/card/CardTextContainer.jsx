import React from 'react';
import { CardText } from '.';

export const CardTextContainer = ({ textArray }) => {
  return (
    <div className="card__text">
      {textArray.map(text => (
        <CardText
          field={text.field}
          value={text.value}
          key={`field-${text.field}`}
        />
      ))}
    </div>
  );
};
