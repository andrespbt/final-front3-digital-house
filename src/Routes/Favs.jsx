import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LeftArrow } from '../Components/icons/LeftArrow';
import Card from '../Components/Main/card/Card';
import { useAppContext } from '../hooks/useAppContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {
    state: { favorites },
  } = useAppContext();

  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate(-1)}>
        <LeftArrow arrowClass="card-grid__arrow" />
      </div>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        <div className="card-grid">
          {favorites.length > 0 ? (
            favorites.map(dentist => (
              <Card
                data={dentist}
                key={dentist.id}
                onClick={() => navigate(`/dentist/${dentist.id}`)}
                textArray={[
                  { field: 'Name', value: dentist.name },
                  { field: 'Username', value: dentist.username },
                ]}
                cardClass="card"
              />
            ))
          ) : (
            <p className="card-grid__empty-message">You dont have any favorite dentist.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Favs;
