import React from 'react'

export const Label = ({labelClass, htmlFor, text}) => {
  return (
    <label
            className={labelClass}
            htmlFor={htmlFor}
          >
            {text}
          </label>
  )
}
