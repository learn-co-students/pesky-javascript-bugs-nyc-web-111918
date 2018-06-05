import React from 'react'

export default class NoBugsHere extends React.Component {
  state = { counter: 1 }

  handleClick = () => {
    this.state.counter += 1
  }

  render() {
    return (
      <button className="ui pink button huge">
        This number should count up when clicked: {this.state.counter}
      </button>
    )
  }
}
