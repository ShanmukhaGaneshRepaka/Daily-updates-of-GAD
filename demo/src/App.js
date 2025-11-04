import logo from './logo.svg';
import './App.css';
import UseStateDemo from './UseStateDemo';

function App() {
  const headingStyle = {
    color: 'blue',
    backgroundColor: 'lightgray',
    padding: '10px',
    borderRadius: '8px'
  };
  return (
    <div className="App">
     <>Hello EveryOne</>

     <UseStateDemo />
    </div>
  );
}

export default App;
