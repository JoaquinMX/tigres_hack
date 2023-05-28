import './App.css';
import EmergencyButton from '../components/EmergencyButton/EmergencyButton';
import MessageDisplayBox from '../components/MessageDisplayBox/MessageDisplayBox';
import MyMapComponent from '../components/MyMapComponent/MyMapComponent';

function App() {
  const props = {
    user: "policia",
    EmergencyButtonIsClick:true,
    policeAssign:true,
    distance:"5",
  }
  return (
    <div>
      <MyMapComponent {...props} >
      </MyMapComponent>
    </div>
  );
}

export default App;
