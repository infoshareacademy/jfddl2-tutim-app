import React from 'react'
import { Button } from 'react-bootstrap'

const TaskListItem = ({
                        task,
                        handlers: {
                          handleRemoveTaskClick,
                          handleToggleCompleteTaskClick
                        }
                      }) => (
  <li key={task.id}>
    {
      task.done ?
        <em>[x]</em> :
        <em>[ ]</em>
    }
    {task.title}

    <Button
      data-task-id={task.id}
      onClick={handleRemoveTaskClick}
    >
      delete
    </Button>

    <Button
      data-task-id={task.id}
      onClick={handleToggleCompleteTaskClick}
    >
      {
        task.done ?
          'mark as undone' :
          'mark as done'
      }
    </Button>
  </li>
)

export default TaskListItem