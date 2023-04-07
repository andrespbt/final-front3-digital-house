export const useForm = ({ formValues, setFormValues }) => {
  const onInputChange = e => {
    const value = e.target?.value;
    const name = e.target?.name;
    setFormValues({ ...formValues, [name]: { ...formValues[name], value } });

    if (name === 'name') {
      if (value.trim().length > 5) {
        setFormValues({
          ...formValues,
          name: {
            ...formValues['name'],
            value,
            errors: false,
            validationClass: 'form__input--success',
          },
        });
      }
    }
    if (name === 'email') {
      const emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
      const isValidEmail = emailRegex.test(value);
      if (isValidEmail) {
        setFormValues({
          ...formValues,
          email: {
            ...formValues['email'],
            value,
            errors: false,
            validationClass: 'form__input--success',
          },
        });
      }
    }
  };

  const onInputBlur = e => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === 'name') {
      if (value.trim().length <= 5) {
        setFormValues({
          ...formValues,
          name: {
            ...formValues['name'],
            errors: 'The name must be more than 5 characters long.',
            validationClass: 'form__input--error',
          },
        });
        return;
      }
    }

    if (name === 'email') {
      const emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
      const isValidEmail = emailRegex.test(value);

      if (!isValidEmail) {
        setFormValues({
          ...formValues,
          email: {
            ...formValues['email'],
            errors: 'The email is invalid.',
            validationClass: 'form__input--error',
          },
        });
        return;
      }
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();

    if (
      formValues.email.errors ||
      formValues.name.errors ||
      formValues.email.value === '' ||
      formValues.name.value === ''
    ) {
      setFormValues({ ...formValues, isFormSubmitted: true, isSuccess: false });
    } else {
      setFormValues({ ...formValues, isFormSubmitted: true, isSuccess: true });
      console.log('Name:', formValues.name.value);
      console.log('Email:', formValues.email.value);
    }
    return;
  };

  return {
    onInputChange,
    onInputBlur,
    onFormSubmit,
  };
};
