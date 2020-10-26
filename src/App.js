
import './App.css';
import React from "react";
import Counter from "./components/Counter";
import CounterGroup from './components/CounterGroup';


function App() {
  const size = 3;
  return (
    <div className="App">
      <header className="App-header">
        <CounterGroup size={size}/>
      </header>
    </div>
  );
}

export default App;
