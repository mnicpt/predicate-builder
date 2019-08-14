import React from 'react';
import './App.scss';
import QueryBuilder from './QueryBuilder';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Search for Sessions</h1>
      </header>
      <main>
        <QueryBuilder />
      </main>
    </div>
  );
}

export default App;
