import {Component} from 'react'

class Child extends Component {
  
  render() {
    return (
      <div>
        <h1>Child Component</h1>
        <h2>{this.props.userInput.length}</h2>
      </div>
    )
  }
}

export default Child