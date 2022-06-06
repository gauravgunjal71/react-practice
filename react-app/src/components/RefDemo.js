import React, { Component } from "react";

export class RefDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input size={100} ref={this.inputRef}></input>
        <br />
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}

export default RefDemo;
