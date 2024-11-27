import React from 'react';

const FormInput = ({ label, type, value, onChange, required }) => (
  <div>
    <label>{label}</label>
    <input type={type} value={value} onChange={onChange} required={required} />
  </div>
);

export default FormInput;
