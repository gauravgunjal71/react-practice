import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Gaurav"></Greet>
      <Welcome name="Gaurav"></Welcome> */}
      <ParentComponent/>
    </div>
  );
}

export default App;
