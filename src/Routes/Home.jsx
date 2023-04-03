import React, { useState } from 'react';
import { useEffect } from 'react';
import Card from '../Components/Main/Card';
import { GridCardSkeleton } from '../Components/Main/skeleton/GridCardSkeleton';
import { useAppContext } from '../hooks/useAppContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {
    fetchData,
    state: { data, favorites, isFetching },
  } = useAppContext();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('odontoFavorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
      <div className="app__main__card-grid">
        {
          isFetching
          ? 
          <GridCardSkeleton />
          : 
          data.map(user => (
              <Card
                data={user}
                key={user.id}
              />
          ))
        }
      </div>
    </>
  );
};

export default Home;
