import React from 'react'
import { render } from 'react-dom'
// import App from './components/app'

class CounterGreeter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {count: 0}
  }
  render(){
    return (
      <div>
        <h1>Welcome to {this.props.name}</h1>
        <h2>The website of the near future</h2>
        <h4>Currently running for {this.props.age} years.</h4>
        <h5 onClick={()=>this.setState({ count: this.state.count + 1 })}>{this.state.count} times this line has experienced being clicked on</h5>
      </div>
    )
  }
}

render(
  <CounterGreeter name='Bad Medicine' age='87' />, document.querySelector('main')
  // <CounterGreeter name='Hellish Medicine' age='87' />, document.querySelector('main')
)
// console.log('welcome to BadMedicine')
