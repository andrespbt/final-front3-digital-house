import React from 'react';
import { XCircleIcon, CheckCircleIcon } from '../../icons';

export const Input = ({ inputClass, onChange, type, id, name, value, placeholder, onBlur, isErrors }) => {
  const icon = isErrors !== null && isErrors ? <XCircleIcon /> : <CheckCircleIcon />;
  return (
    <>
      <div className="input-container">
        <input
          className={inputClass}
          onChange={onChange}
          type={type}
          id={id}
          name={name}
          autoComplete="off"
          value={value}
          placeholder={placeholder}
          onBlur={onBlur}
        />
        {isErrors !== null ? icon : ''}
      </div>
    </>
  );
};
