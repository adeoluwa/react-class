import React from 'react';

function FormElement2({
  type,
  name,
  id,
  value,
  className,
  placeholder,
  onChange,
}) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default FormElement2;
