import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "Gaurav"
      }

      this.greetParent = this.greetParent.bind(this)

    }

    greetParent(childName){
        alert(`Hello ${this.state.name} from ${childName}`)
    }
    

  render() {
    return (
      <div>
        <ChildComponent func={this.greetParent}></ChildComponent>
      </div>
    )
  }
}

export default ParentComponent
