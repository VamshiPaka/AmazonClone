import logo from './logo.svg';
import './App.css';

function Greet(props) {
  return <div>Hello {props.name}</div>;
}

function App() {
  return (
    <div className="App">
      <Greet name="Vamshi" />
      <Greet name="Karthik" />
      <Greet name="Sanju" />
      <Greet name="Keerthi" />
    </div>
  );
}

export default App;
