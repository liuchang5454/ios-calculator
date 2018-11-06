import React, {Component} from 'react';
import Button from './Button';

class ButtonPanel extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  }

  render(){
    return (
      <div className="ButtonPanel">
        <div className="ButtonRow">
          <Button display="AC" color="grey" clickHandler={this.handleClick} />
          <Button display="+/-" color="grey" clickHandler={this.handleClick} />
          <Button display="%" color="grey" clickHandler={this.handleClick} />
          <Button display="÷" color="yellow" clickHandler={this.handleClick} />
        </div>
        <div className="ButtonRow">
          <Button display="7" color="blk" clickHandler={this.handleClick} />
          <Button display="8" color="blk" clickHandler={this.handleClick} />
          <Button display="9" color="blk" clickHandler={this.handleClick} />
          <Button display="x" color="yellow" clickHandler={this.handleClick} />
        </div>
        <div className="ButtonRow">
          <Button display="4" color="blk" clickHandler={this.handleClick} />
          <Button display="5" color="blk" clickHandler={this.handleClick} />
          <Button display="6" color="blk" clickHandler={this.handleClick} />
          <Button display="-" color="yellow" clickHandler={this.handleClick} />
        </div>
        <div className="ButtonRow">
          <Button display="1" color="blk" clickHandler={this.handleClick} />
          <Button display="2" color="blk" clickHandler={this.handleClick} />
          <Button display="3" color="blk" clickHandler={this.handleClick} />
          <Button display="+" color="yellow" clickHandler={this.handleClick} />
        </div>
        <div className="ButtonRow">
          <Button display="0" color="blk" clickHandler={this.handleClick} />
          <Button display="." color="blk" clickHandler={this.handleClick} />
          <Button display="=" color="yellow" clickHandler={this.handleClick} />
        </div>
        
      </div>
    );
  }
}

export default ButtonPanel;
