import React from 'react'

import TaskListItem from './TaskListItem'

const TaskList = ({
                    tasks,
                    handlers
                  }) => (
  <ul>
    {
      tasks.map(
        task => (
          <TaskListItem
            key={task.id}
            task={task}
            handlers={handlers}
          />
        )
      )
    }
  </ul>
)

export default TaskList