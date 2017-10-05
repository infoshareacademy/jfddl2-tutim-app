import React from 'react'

class Counter extends React.Component {

  state = {
    inputValue: this.props.title,
    counterValue: this.props.startFrom
  }

  handleIncrementClick = () => {
    this.setState({
      counterValue: this.state.counterValue + this.props.delta
    })
  }

  handleDecrementClick = () => {
    this.setState({
      counterValue: this.state.counterValue - this.props.delta
    })
  }

  handleResetClick = () => {
    this.setState({
      counterValue: this.props.startFrom
    })
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  handleCounterInputChange = event => {
    this.setState({
      counterValue: parseInt(event.target.value, 10)
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.counterValue}</h1>
        <h2>{this.state.inputValue}</h2>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={this.state.counterValue}
          onChange={this.handleCounterInputChange}
        />
        <p>
          <button
            onClick={this.handleIncrementClick}
          >
            Increment
          </button>

          <button
            onClick={this.handleDecrementClick}
          >
            Decrement
          </button>

          <button
            onClick={this.handleResetClick}
          >
            Reset
          </button>
        </p>
      </div>
    )
  }
}

export default Counter