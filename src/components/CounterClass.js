import React from 'react';

export class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  changeNumber(flag) {
    let currentNumber = this.state.number;
    this.setState({
      number: flag ? currentNumber + 1 : currentNumber - 1,
    });
  }
  render() {
    return (
      <div className="counter">
        <h2>Class Component</h2>
        <button
          onClick={() => {
            this.changeNumber(true);
          }}
        >
          plus
        </button>
        <p>{this.state.number}</p>
        <button
          onClick={() => {
            this.changeNumber(false);
          }}
        >
          minus
        </button>
      </div>
    );
  }
}
