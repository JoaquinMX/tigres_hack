import './App.css';
import EmergencyButton from '../components/EmergencyButton/EmergencyButton';
import MessageDisplayBox from '../components/MessageDisplayBox/MessageDisplayBox';

function App() {
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
    </div>
  );
}

export default App;
