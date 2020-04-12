import React from 'react';
import Animation from './components/Animation/Animation';
import Button from './components/Button/Button';
import workInProgress from './assets/lotties/work-in-progress.json'
import dog from './assets/lotties/dog.json'
import cv from './assets/francisco-villalta-cv.pdf';
import './App.css';

function App() {

  const dogWidth = 120;
  return (
    <div className="App">
      <header className="App-header">
        <Animation src={workInProgress}/>
        <Animation src={dog} width={dogWidth}/>
        <Button cv={cv}/>
        
      </header>
    </div>
  );
}

export default App;
