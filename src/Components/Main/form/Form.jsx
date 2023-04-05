import React, { useState } from 'react';
import { useAppContext } from '../../../hooks/useAppContext';
import { Input } from './Input';
import { Label } from './Label';

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [formValues, setFormValues] = useState({
    name: { value: '', errors: null, validationClass: '' },
    email: { value: '', errors: null, validationClass: '' },
    isFormValid: false
  });

  const {
    state: { isDarkMode },
  } = useAppContext();

  const onInputChange = e => {
    setFormValues({ ...formValues, [e.target.name]: { ...formValues[e.target.name], value: e.target.value } });
  };

  const onInputBlur = e => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === 'name') {
      if (value.length <= 5) {
        setFormValues({
          ...formValues,
          name: {
            ...formValues['name'],
            errors: 'The name must be more than 5 characters long.',
            validationClass: 'app__contact__form__input_error',
          },
        });
        return;
      }

      setFormValues({
        ...formValues,
        name: {
          ...formValues['name'],
          errors: false,
          validationClass: 'app__contact__form__input_success',
        },
      });
    }

    if (name === 'email') {
      const emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
      const isValidEmail = emailRegex.test(value);

      if (!isValidEmail) {
        setFormValues({
          ...formValues,
          email: {
            ...formValues['email'],
            errors: 'Email is invalid.',
            validationClass: 'app__contact__form__input_error',
          },
        });
        return;
      }

      setFormValues({
        ...formValues,
        email: {
          ...formValues['email'],
          errors: false,
          validationClass: 'app__contact__form__input_success',
        },
      });
    }
    
    if(formValues.name.errors === false && formValues.email.errors === false){
      setFormValues({...formValues, isFormValid: true});
      return;
    }

    
  };

  const formThemeClass = isDarkMode ? 'dark' : 'light';
  const submitInputThemeClass = isDarkMode ? 'mainDark' : 'mainLight';

  return (
    <div>
      <form className={`app__contact__form ${formThemeClass}`}>
        <fieldset className="app__contact__form__fieldset">
          <legend className="app__contact__form__legend">Contact information</legend>
          <Label
            labelClass="app__contact__form__label"
            htmlFor="name"
            text="Name"
          />
          <Input
            inputClass={`app__contact__form__input ${formValues.name.validationClass}`}
            onChange={onInputChange}
            type="text"
            id="name"
            name="name"
            value={formValues.name.value}
            placeholder="Enter your name"
            onBlur={onInputBlur}
            isErrors={formValues.name.errors}
          />
          {formValues.name.errors && (
            <span className="app__contact__form__error_message">{formValues.name.errors}</span>
          )}

          <Label
            labelClass="app__contact__form__label"
            htmlFor="email"
            text="Email"
          />
          <Input
            inputClass={`app__contact__form__input ${formValues.email.validationClass}`}
            onChange={onInputChange}
            type="email"
            id="email"
            name="email"
            value={formValues.email.value}
            placeholder="Enter your email"
            onBlur={onInputBlur}
            isErrors={formValues.email.errors}
          />
          {formValues.email.errors && (
            <span className="app__contact__form__error_message">{formValues.email.errors}</span>
          )}
        </fieldset>

        <Input
          inputClass={`${submitInputThemeClass} app__contact__form__submit`}
          type="submit"
          value="Submit"
          isErrors={null}
          isFormValid={formValues.isFormValid}
        />
      </form>
    </div>
  );
};

export default Form;
