import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LeftArrow } from '../Components/icons/LeftArrow';
import Card from '../Components/Main/card/Card';
import { GridCardSkeleton } from '../Components/Main/skeleton/GridCardSkeleton';
import { useAppContext } from '../hooks/useAppContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { dentistId } = useParams();
  const {
    fetchSingleDentist,
    state: { data, isFetching },
  } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleDentist(dentistId);
  }, []);

  return (
    <div className="app__detail__card-grid">
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div onClick={() => navigate(-1)}>
        <LeftArrow arrowClass="card-grid__arrow" />
      </div>
      {isFetching ? (
        <GridCardSkeleton />
      ) : (
        <Card
          data={data}
          onClick={null}
          textArray={[
            { field: 'Name', value: data.name },
            { field: 'Email', value: data.email },
            { field: 'Phone', value: data.phone },
            { field: 'Website', value: data.website },
          ]}
          cardClass="card--detail"
        />
      )}
    </div>
  );
};

export default Detail;
