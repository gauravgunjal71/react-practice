import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';
import TextChange from './components/TextChange';
import ParentComp from './components/ParentComp';
import RefDemo from './components/RefDemo';
import HOCchild1 from './components/HOCchild1';
import HOCchild2 from './components/HOCchild2';

function App() {
  return (
    <div className="App">
      <HOCchild1/>
      <HOCchild2/>
    </div>
  );
}

export default App;
