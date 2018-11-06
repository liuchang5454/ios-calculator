import React, {Component} from 'react';

class Button extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.props.clickHandler(this.props.display);
  }

  render(){
    let content = this.props.display;
    return (
      <div className="Button" color={this.props.color} content={content} onClick={this.handleClick}>
        {content}
      </div>
    );
  }
}

export default Button;