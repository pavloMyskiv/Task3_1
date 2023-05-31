import React from 'react';

export class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  increase() {
    this.setState((state) => {
      return { number: state.number + 1 };
    });
  }
  dicrease() {
    this.setState((state) => {
      return { number: state.number - 1 };
    });
  }
  render() {
    return (
      <div className="counter">
        <h2>Class Component</h2>
        <button
          onClick={() => {
            this.increase();
          }}
        >
          plus
        </button>
        <p>{this.state.number}</p>
        <button
          onClick={() => {
            this.dicrease();
          }}
        >
          minus
        </button>
      </div>
    );
  }
}
