import React, {Component} from 'react';

class NumberDisplay extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <div className="NumberDisplay">
        <div>{this.props.value}</div>
      </div>
    );
  }
}

export default NumberDisplay;