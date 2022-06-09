import React, { Component } from 'react'
import HOC from './HOC'

export class HOCchild2 extends Component {
  render() {
      const {name} = this.props
    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }
}

export default HOC(HOCchild2)
