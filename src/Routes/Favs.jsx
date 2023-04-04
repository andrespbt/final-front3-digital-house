import React, { useEffect } from 'react';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Components/Main/Card';
import { useAppContext } from '../hooks/useAppContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state: { favorites }} = useAppContext();
  const navigate = useNavigate();

  return (
    <>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        <div className="app__home__card-grid">
          {
            favorites.length > 0 
            ? 
            (
              favorites.map(dentist => (
                <Card
                  data={dentist}
                  key={dentist.id}
                  onClick={() => navigate(`/dentist/${dentist.id}`)}
                  textArray={[
                    { field: 'Name', value: dentist.name },
                    { field: 'Username', value: dentist.username },
                  ]}
                  cardClass="app__home__card_grid__card"
                />
              ))
            ) 
            : 
            (
              <p>You dont have any favorite dentist.</p>
            )
          }
        </div>
      </div>
    </>
  );
};

export default Favs;
