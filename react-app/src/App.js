import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Gaurav"></Greet>
      <Welcome name="Gaurav"></Welcome> */}
      <Message></Message>
    </div>
  );
}

export default App;
