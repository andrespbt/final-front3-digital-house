import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LeftArrow } from '../Components/icons/LeftArrow';
import Form from '../Components/Main/form/Form';
import { CheckCircleFillIcon } from '../Components/icons/CheckCircleFillIcon';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: { value: '', errors: null, validationClass: '' },
    email: { value: '', errors: null, validationClass: '' },
    isFormSubmitted: false,
    isSuccess: false,
  });

  return (
    <>
      <div className="app__contact__container">
        <div onClick={() => navigate(-1)}>
          <LeftArrow arrowClass="app__main__card-grid__arrow" />
        </div>
        {formValues.isSuccess ? (
          <div className="app__contact__text_success">
            <CheckCircleFillIcon />
            <h2>Thanks {formValues.name.value}</h2>
            <p>We will contact you soon, through email.</p>
          </div>
        ) : (
          <>
            <div className="app__contact__text">
              <h2>Want to know more?</h2>
              <p>Send us your questions and we will contact you</p>
            </div>

            <Form
              formValues={formValues}
              setFormValues={setFormValues}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Contact;
