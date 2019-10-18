import React, { Component } from 'react';
class Calculator extends Component {
  render() {
    return (
      <main className="react-calculator">
        <Display />
        <ControlPanel />
        <Digits />
        <Operators />
        <History />
      </main>
    )
  }
}

export default Calculator;