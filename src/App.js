import React, { Component } from 'react';
import ButtonPanel from './Components/ButtonPanel';
import NumberDisplay from './Components/NumberDisplay';
import calculate from "./Logic/calculate";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      total : null,
      next : null,
      operation : null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  }

  render() {
    return (
      <div className="App">
        <NumberDisplay value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
