import React from 'react';
import './App.css';
import { CounterClass } from './components/CounterClass';
import { CounterFunction } from './components/CounterFunction';

const App = () => {
  return (
    <div className="App">
      <CounterClass />
      <CounterFunction />
    </div>
  );
};

export default App;
