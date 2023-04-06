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
      <div className="contact-container">
        <div onClick={() => navigate(-1)}>
          <LeftArrow arrowClass="card-grid__arrow" />
        </div>
        {formValues.isSuccess ? (
          <div className="contact-text--success">
            <CheckCircleFillIcon />
            <h2>Thanks {formValues.name.value}</h2>
            <p className="card-grid__empty-message">We will contact you soon by email.</p>
          </div>
        ) : (
          <>
            <div className="contact-text">
              <h2 className="contact-text__h2">Want to know more?</h2>
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
