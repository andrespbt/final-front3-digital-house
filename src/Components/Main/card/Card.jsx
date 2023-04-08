import React from 'react';
import { useAppContext } from '../../../hooks/useAppContext';
import doctorImg from '../../../img/doctor.jpg';
import { HeartFillIcon, HeartIcon } from '../../icons';
import { CardTextContainer } from '.';

const Card = ({ data, onClick, textArray, cardClass }) => {
  const { id } = data || '';
  const {
    state: { isDarkMode, favorites },
    addFavorite,
    removeFavorite,
  } = useAppContext();

  const isFav = favorites.some(fav => fav.id === id);

  const themeClass = isDarkMode ? 'dark' : 'light';

  const onFavButtonClick = e => {
    e.stopPropagation();

    if (!isFav) {
      addFavorite(data);
    } else {
      removeFavorite(id);
    }
  };

  return (
    <div
      className={`${cardClass} ${themeClass}`}
      onClick={onClick}
      aria-label="dentistCard"
    >
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      <img
        className="card__image"
        src={doctorImg}
        alt="doctor"
      />

      <CardTextContainer textArray={textArray} />

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

      <button
        onClick={onFavButtonClick}
        className="card__fav-button"
      >
        {isFav ? <HeartFillIcon /> : <HeartIcon fill={isDarkMode ? 'white' : 'black'} />}
      </button>
    </div>
  );
};

export default Card;
