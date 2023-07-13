import React from 'react'
import './TituloPrincipal.css';

const TituloPrincipal = ({ saludo }) => {
    return (
      <div>
        <h1 className="titulo-principal">{saludo}</h1>
      </div>
    );
  };
  
  export default TituloPrincipal;