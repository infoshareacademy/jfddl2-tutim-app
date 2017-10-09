import React from 'react'

class AddButton extends React.Component {

  state = {
    taskInputValue: ''
  }

  handleTaskInputChange = event => {
    this.setState({
      taskInputValue: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.props.addTask(this.state.taskInputValue)

    this.setState({
      taskInputValue: ''
    })
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.taskInputValue}
          onChange={this.handleTaskInputChange}
        />
        <button>
          Dodaj do ulubionych
        </button>
      </form>
    )
  }

}

export default AddButton