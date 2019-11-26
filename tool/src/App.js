import React, { useState } from 'react';
import logo from './logo.svg';
import './styling/App.scss';
import { Toolbox } from './components/Toolbox'

function App() {
  let { builds, setBuilds } = useState(["Build 1", "Build 2", "Build 3"])
  
  return (
    <div className="App">
     <Toolbox />
    </div>
  );
}

export default App;
