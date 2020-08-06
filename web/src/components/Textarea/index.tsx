import React, { TextareaHTMLAttributes } from 'react';

import './styles.css'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
};

const Textarea: React.FunctionComponent<TextareaProps> = ({ label, name, ...rest }) => {
  // ...res são todos os outro atributos que um Textarea pode receber, para usar precisa importar o TextareaHTMLAttributes
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest}/>
    </div>
  );
};

export default Textarea;