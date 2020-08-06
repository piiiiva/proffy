import React, { InputHTMLAttributes } from 'react';

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
};

const Input: React.FunctionComponent<InputProps> = ({ label, name, ...rest }) => {
  // ...res são todos os outro atributos que um input pode receber, para usar precisa importar o InputHTMLAttributes
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest}/>
    </div>
  );
};

export default Input;