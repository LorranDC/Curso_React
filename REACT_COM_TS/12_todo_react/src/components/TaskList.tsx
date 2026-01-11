import React from 'react'

//interfaces
import { ITask } from '../interfaces/Task'

//CSS
import styles from "./App.module.css"

type Props = {
  taskList: ITask[]
}

const TaskList = ({taskList}: Props) => {
  return (
    <>
    {taskList.length > 0 ? (
      taskList.map((task) => (
        <div key={task.id}>
          <p>{task.title}</p>
        </div>
      ))
    ) : (
      <p>Não tem tarefas cadastradas</p>

    )}
    </>
  )
}

export default TaskList