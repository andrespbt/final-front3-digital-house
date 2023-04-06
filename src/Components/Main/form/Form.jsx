import React from 'react';
import { useAppContext } from '../../../hooks/useAppContext';
import { Input } from './Input';
import { Label } from './Label';
import { useForm } from '../../../hooks/useForm';

const Form = ({ formValues, setFormValues }) => {
  const {
    state: { isDarkMode },
  } = useAppContext();
  const submitInputThemeClass = isDarkMode ? 'mainDark' : 'mainLight';
  const formThemeClass = isDarkMode ? 'dark' : 'light';

  const { onInputChange, onInputBlur, onFormSubmit } = useForm({ formValues, setFormValues });

  return (
    <form
      className={`app__contact__form ${formThemeClass}`}
      onSubmit={onFormSubmit}
    >
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
          <span className="app__contact__form__input_error_message">{formValues.name.errors}</span>
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
          <span className="app__contact__form__input_error_message">{formValues.email.errors}</span>
        )}
      </fieldset>
      <Input
        inputClass={`${submitInputThemeClass} app__contact__form__submit`}
        type="submit"
        value="Submit"
        isErrors={null}
        isFormValid={formValues.isFormValid}
      />

      {formValues.isFormSubmitted && !formValues.isSuccess && (
        <span className="app__contact__form__error_message">Please check your information again.</span>
      )}
    </form>
  );
};

export default Form;
