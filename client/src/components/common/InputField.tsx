import React from 'react'

interface inputProps {
    label?: string;

}

const InputField = ({label, ...otherProps}:inputProps) => {
  return (
    <>
    <input placeholder={label} className='input_field ' {...otherProps} />
    </>
  )
}

export default InputField