import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../hooks/useAppContext';
import doctorImg from '../../img/doctor.jpg';
import { HeartFillIcon } from '../icons/HeartFillIcon';
import { HeartIcon } from '../icons/HeartIcon';

const Card = ({ data }) => {
  const { name, username, id } = data || '';
  const {
    state: { isDarkMode, favorites },
    addFavorite,
    removeFavorite,
  } = useAppContext();
  const navigate = useNavigate();

  const isFav = favorites.some(fav => fav.id === data.id);

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
      className={`app__main__card_grid__card ${themeClass}`}
      onClick={() => navigate(`/dentist/${id}`)}
    >
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      <img
        className="app__main__card_grid__card__image"
        src={doctorImg}
        alt="doctor"
      />

      <div className="app__main__card_grid__card__text">
        <p>
          Name: <strong>{name}</strong>
        </p>
        <p>
          Username: <strong>{username}</strong>
        </p>
      </div>

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button
        onClick={onFavButtonClick}
        className="app__main__card_grid__card__fav_button"
      >
        {isFav ? <HeartFillIcon /> : <HeartIcon fill={isDarkMode ? 'white' : 'black'} />}
      </button>
    </div>
  );
};

export default Card;
