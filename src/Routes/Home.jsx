import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Components/Main/Card';
import { GridCardSkeleton } from '../Components/Main/skeleton/GridCardSkeleton';
import { useAppContext } from '../hooks/useAppContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {
    fetchAllUsers,
    state: { data, favorites, isFetching },
  } = useAppContext();

  const navigate = useNavigate();

  useEffect(() => {
    fetchAllUsers();
  }, []);

  useEffect(() => {
    localStorage.setItem('odontoFavorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
      <div className="app__home__card-grid">
        {isFetching ? (
          <GridCardSkeleton  cardAmount={data.length}/>
        ) : (
          data.length > 1 &&
          data.map(user => (
            <Card
              data={user}
              key={user.id}
              onClick={() => navigate(`/dentist/${user.id}`)}
              textArray={[{field: 'Name', value: user.name}, {field:'Username', value: user.username}]}
              cardClass='app__home__card_grid__card'
            />
          ))
        )}
      </div>
    </>
  );
};

export default Home;
