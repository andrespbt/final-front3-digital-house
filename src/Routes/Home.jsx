import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Components/Main/card/Card';
import { GridCardSkeleton } from '../Components/Main/skeleton/GridCardSkeleton';
import { useAppContext } from '../hooks/useAppContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {
    fetchAllDentists,
    state: { data, isFetching },
  } = useAppContext();

  const navigate = useNavigate();

  useEffect(() => {
    fetchAllDentists();
  }, []);

  return (
    <>
      <div className="card-grid">
        {isFetching ? (
          <GridCardSkeleton cardAmount={10} />
        ) : (
          data.length > 1 &&
          data.map(dentist => (
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
        )}
      </div>
    </>
  );
};

export default Home;
