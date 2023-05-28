import React, {useState, useEffect} from 'react';
import Map from './MyMapComponent';
const MapComponentWrapper = () => {
    const [currentPosition, setCurrentPosition] = useState([25.726590, -100.313666]);
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
    
    <Map currentPosition={currentPosition} setCurrentPosition={setCurrentPosition} {...props}/>
  )
}

export default MapComponentWrapper;