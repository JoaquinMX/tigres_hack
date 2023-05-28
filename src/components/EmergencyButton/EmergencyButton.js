import React, {useContext} from 'react';
import { MyContext } from '../../context/MyContext';
import './EmergencyButton.css';

function EmergencyButton() {
  const {isItPressed, setIsItPressed} = useContext(MyContext);
  return (
    <button 
      className='button'
      onClick={() => {setIsItPressed(!isItPressed)}}
    >
      BOTÓN DE EMERGENCIA
    </button>
  );
  }

export default EmergencyButton;