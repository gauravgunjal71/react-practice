import React, { Component } from 'react'

export class TextChange extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         value: ""
      }

      this.changeText = this.changeText.bind(this)
    }
    
    changeText(event){
        this.setState({
            value: event.target.value
        })
    }

  render() {
    return (
      <div>
        <br></br>
        <input id='input' size={50} onChange={this.changeText}></input>
        <h1>{this.state.value}</h1>
      </div>
    )
  }
}

export default TextChange
