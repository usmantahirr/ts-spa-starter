import React from 'react';
import { HomeContainer } from '@containers';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <HomeContainer />
      </header>
    </div>
  );
}

export default App;
