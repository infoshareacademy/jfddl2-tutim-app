import React from 'react'

import AddTaskForm from './AddTaskForm'
import TaskList from './TaskList'

import { getNextId } from './_utils'

class Tasker extends React.Component {

  state = {
    tasks: []
  }

  addTask = title => {
    const { tasks } = this.state
    const maxIdSoFar = getNextId(tasks)

    this.setState({
      tasks: tasks.concat({
        id: maxIdSoFar + 1,
        title: title,
        done: false,
        isFavorite: false
      })
    }, () => {
      localStorage.setItem('tasker', JSON.stringify(this.state))
    })
  }

  handleRemoveTaskClick = event => {
    const taskId = parseInt(event.target.dataset.taskId, 10)

    this.setState({
      tasks: this.state.tasks.filter(
        task => taskId !== task.id
      )
    }, () => {
      localStorage.setItem('tasker', JSON.stringify(this.state))
    })
  }

  handleToggleCompleteTaskClick = event => {
    const taskId = parseInt(event.target.dataset.taskId, 10)

    this.setState({
      tasks: this.state.tasks.map(
        task => task.id !== taskId ?
          task :
          // Object.assign({}, task, { done: !task.done })
          {
            ...task,
            done: !task.done
          }
      )
    }, () => {
      localStorage.setItem('tasker', JSON.stringify(this.state))
    })
  }

  componentWillMount() {
    console.log('tasker will mount')
    this.setState(
      JSON.parse(
        localStorage.getItem('tasker')
      )
    )
  }

  componentDidMount() {
    console.log('tasker did mount')
  }

  componentWillUpdate() {
    console.log('tasker will update')
  }

  componentDidUpdate() {
    console.log('tasker did update')
  }

  render() {
    console.log('tasker render')

    const { tasks } = this.state
    const handlers = {
      handleRemoveTaskClick: this.handleRemoveTaskClick,
      handleToggleCompleteTaskClick: this.handleToggleCompleteTaskClick
    }

    return (
      <div>
        <h1>
          Tasker
        </h1>

        <AddTaskForm addTask={this.addTask}/>

        <TaskList
          tasks={tasks}
          handlers={handlers}
        />

        <ul>
          {
            tasks.filter(
              task => task.done
            ).map(
              task => <li key={task.id}>{task.title}</li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default Tasker