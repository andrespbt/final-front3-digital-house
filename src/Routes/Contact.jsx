import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LeftArrow } from '../Components/icons/LeftArrow';
import Form from '../Components/Main/form/Form';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const navigate = useNavigate();
  
  return (
    <>
    <div onClick={() => navigate(-1)}>
        <LeftArrow arrowClass="app__main__card-grid__arrow" />
      </div>
      <div className="app__contact__text">
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
      </div>

      <Form />
    </>
  );
};

export default Contact;
