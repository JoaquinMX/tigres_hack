import React, {useState, useEffect, useContext} from 'react';
import Map from './MyMapComponent';
import { MyContext } from '../../context/MyContext';

const MapComponentWrapper = () => {
    const [currentPosition, setCurrentPosition] = useState([25.726590, -100.313666]);
    const [policesPositions, setPolicesPosition] = useState([[25.726190, -100.323666], [25.726090, -100.313166], [25.736590, -100.313666]]);
    const {isItPressed, setIsItPressed} = useContext(MyContext);

    useEffect(() => {
        /**
         * Retrieve Current Position
         */
        setCurrentPosition([25.726590, -100.313666]);
        /**
         * Retrieve Polices Position
         */
        setPolicesPosition([[25.726190, -100.323666], [25.726090, -100.313166], [25.736590, -100.313666]]);

      }, [])
      
    const props = {
      user: "usuario",
      EmergencyButtonIsClick:true,
      policeAssign:false,
      distance:"5",
    }
    
  return (
    <Map currentPosition={currentPosition} policesPositions={policesPositions} setCurrentPosition={setCurrentPosition} isItPressed={isItPressed} setIsItPressed={setIsItPressed} {...props}/>
  )
}

export default MapComponentWrapper;