import React from 'react';
import { useNavigate } from 'react-router-dom';
import './sobre.css'

function Sobre() {
    const irPara= useNavigate();
    const handleClick = () => {

        irPara('/');
    };
return (
    <div className='d2'>
      <h1 className='h2'>Página Sobre</h1>      
      <button onClick={handleClick}>Ir para Home</button>
    </div>
  );
}
  export default Sobre;

