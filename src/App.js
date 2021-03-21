import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Greet(props) {
  return <div>Hello {props.name}</div>;
}

function Counter() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  return (
    <div>
      My Count is {count}
      <button onClick={increase}>+</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Greet name="Vamshi" />
      <Greet name="Karthik" />
      <Greet name="Sanju" />
      <Greet name="Keerthi" />
      <Counter />
    </div>
  );
}

export default App;
