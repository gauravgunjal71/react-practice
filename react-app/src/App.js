import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';
import TextChange from './components/TextChange';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Gaurav"></Greet>
      <Welcome name="Gaurav"></Welcome> */}
      <TextChange></TextChange>
    </div>
  );
}

export default App;
