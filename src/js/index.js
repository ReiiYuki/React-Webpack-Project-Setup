import React, { Component } from 'react'
import { render } from 'react-dom'

class HelloWorld extends Component {
  render(){
    return (
      <h1>Hello World</h1>
    )
  }
}

render (<HelloWorld/>, document.getElementById('app'))
