import React, { Component } from 'react'
import MemoComp from './MemoComp';

export class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "gaurav"
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "gaurav"
            })
        }, 2000);
    }
    

  render() {
      console.log("******** parent class component **********")
    return (
        <MemoComp name={this.state.name}></MemoComp>
    )
  }
}

export default ParentComp
