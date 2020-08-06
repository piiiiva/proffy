import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'

interface PageHeaderProps {
  title: string;
  description?: string; // ? é opcional
}

const PageHeader: React.FC<PageHeaderProps> = (props) => { //React.FC = FunctionalComponent
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
            <img src={backIcon} alt="Voltar"/>
        </Link>
        <img src={logoImg} alt="Proffy"/>
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {/* Se existir porps.description fazer um parágrafo com ela */}
        { props.description && <p>{props.description}</p> }
        
        {props.children}
      </div>

    </header>
  );
}

export default PageHeader;