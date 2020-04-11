import React from 'react';
import Animation from './components/Animation';
import workInProgress from './lotties/work-in-progress.json'
import dog from './lotties/dog.json'
import './App.css';

function App() {

  const dogWidth = 120;
  return (
    <div className="App">
      <header className="App-header">
        <Animation src={workInProgress}/>
        <Animation src={dog} width={dogWidth}/>

      </header>
    </div>
  );
}

export default App;
