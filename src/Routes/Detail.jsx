import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Components/Main/Card';
import { GridCardSkeleton } from '../Components/Main/skeleton/GridCardSkeleton';
import { useAppContext } from '../hooks/useAppContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { dentistId } = useParams();
  const {
    fetchSingleUser,
    state: { data, isFetching },
  } = useAppContext();

  useEffect(() => {
    fetchSingleUser(dentistId);
  }, []);

  return (
    <div className='app__detail__card-grid'>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      {
        isFetching 
        ? 
        <GridCardSkeleton /> 
        : 
        <Card
        data={data}
        onClick={null}
        textArray={[
          { field: 'Name', value: data.name },
          { field: 'Email', value: data.email },
          { field: 'Phone', value: data.phone },
          { field: 'Website', value: data.website },
        ]}
        cardClass="app__detail__card_grid__card"
      />
      }
      
    </div>
  );
};

export default Detail;
