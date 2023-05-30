import React, { useState } from 'react';

export const CounterFunction = () => {
  const [number, setNumber] = useState(0);

  const changeNumber = (flag) => {
    flag ? setNumber(number + 1) : setNumber(number - 1);
  };
  return (
    <div className="counter">
      <h2>Function Component</h2>
      <button
        onClick={() => {
          changeNumber(true);
        }}
      >
        plus
      </button>
      <p>{number}</p>
      <button
        onClick={() => {
          changeNumber(false);
        }}
      >
        minus
      </button>
    </div>
  );
};
