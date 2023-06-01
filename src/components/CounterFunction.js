import React, { useState } from 'react';

export const CounterFunction = () => {
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 1);
  };
  const dicrease = () => {
    setNumber(number - 1);
  };
  return (
    <div className="counter">
      <h2>Function Component</h2>
      <button onClick={increase}>plus</button>
      <p>{number}</p>
      <button onClick={dicrease}>minus</button>
    </div>
  );
};
