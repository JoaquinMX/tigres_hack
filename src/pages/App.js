import './App.css';
import MapComponentWrapper from '../components/MyMapComponent/MapComponentWrapper';
import { MyContext } from '../context/MyContext';
import { useState, React } from 'react';

function App() {
  const [isItPressed, setIsItPressed] = useState(false);
  return (
    <div>
      <MyContext.Provider value={{isItPressed, setIsItPressed}}>
        <MapComponentWrapper />
      </MyContext.Provider>
    </div>
  );
}

export default App;
