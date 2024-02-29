import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css'

function home() {
    const irPara= useNavigate();
    const handleClick = () => {
        irPara('/sobre');
    };
return (
    <div className='d1'>
      <h1 className='h1'>Página Inicial</h1>      
      <button onClick={handleClick}>Ir para Sobre</button>
    </div>
  );
}
  export default home;

