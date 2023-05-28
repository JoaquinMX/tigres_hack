import React, {useState, useEffect, useContext} from 'react';
import Map from './MyMapComponent';
import { MyContext } from '../../context/MyContext';

const MapComponentWrapper = () => {
    const [currentPosition, setCurrentPosition] = useState([25.726590, -100.313666]);
    const {isItPressed, setIsItPressed} = useContext(MyContext);

    useEffect(() => {
        /**
         * Retrieve Current Position
         */
        setCurrentPosition([25.726590, -100.313666]);
      }, [])
      
    const props = {
      user: "usuario",
      EmergencyButtonIsClick:true,
      policeAssign:false,
      distance:"5",
    }
    
  return (
    <Map currentPosition={currentPosition} setCurrentPosition={setCurrentPosition} isItPressed={isItPressed} setIsItPressed={setIsItPressed} {...props}/>
  )
}

export default MapComponentWrapper;