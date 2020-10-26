
import './App.css';
import React from "react";
import Counter from "./components/Counter";


function App() {
  const size = 3;
  return (
    <div className="App">
      <header className="App-header">
        <Counter/>
      </header>
    </div>
  );
}

export default App;
