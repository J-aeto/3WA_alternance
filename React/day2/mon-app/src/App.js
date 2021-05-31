import './App.css';
import React from "react";
import ExoCompteur from "./components/ExoCompteur/ExoCompteur";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="main-column">
        <div className="App-sidebar"></div>
        <ExoCompteur initialValue ={0} incrValue={+1} decrValue={-1} />
      </div>
    </div>
  );
}

export default App;
