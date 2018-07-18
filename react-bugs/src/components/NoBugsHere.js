import React from 'react'

export default class NoBugsHere extends React.Component {
  state = { counter: 1 }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <button className="ui pink button huge" onClick={this.handleClick}>
        This number should count up when clicked: {this.state.counter}
      </button>
    )
  }
}
