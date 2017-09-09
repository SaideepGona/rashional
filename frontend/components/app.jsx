const React = require('react');
const Pic = require('./pic.jsx')

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      n: 0
    }
  }
  render() {
    return <div>
      <h1>clicked {this.state.n}
        times</h1>
      <button onClick={this.handleClick.bind(this)}>click me!</button>
      <Pic/>
    </div>
  }
  handleClick() {
    this.setState({
      n: this.state.n + 1
    })
  }
}

module.exports = App
