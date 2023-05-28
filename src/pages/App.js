import './App.css';
import EmergencyButton from '../components/EmergencyButton/EmergencyButton';
import MessageDisplayBox from '../components/MessageDisplayBox/MessageDisplayBox';
import MyMapComponent from '../components/MyMapComponent/MyMapComponent';
import MapComponentWrapper from '../components/MyMapComponent/MapComponentWrapper';

function App() {
  const props = {
    user: "policia",
    EmergencyButtonIsClick:true,
    policeAssign:true,
    distance:"5",
  }
  return (
    <div>
      Hello World!
      <EmergencyButton></EmergencyButton>
      <br>
      </br>
      <MessageDisplayBox
        message="5 metros de ti"
        user = "usuario"
      ></MessageDisplayBox> 

      <MapComponentWrapper />
    </div>
  );
}

export default App;
