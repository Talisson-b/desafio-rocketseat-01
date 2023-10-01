import { ChangeEvent, FormEvent, useState } from 'react'
import Task from '../Task'
import styles from './styles.module.scss'
import {PlusCircle} from '@phosphor-icons/react'


const FormTask = () => {
  const [tasks, setTasks] = useState<string[]>([])
  const [newTask, setNewTask] = useState('')

  function handleTask(e: FormEvent) {
    e.preventDefault()
    setTasks([...tasks, newTask])
    setNewTask('')
  }

  function handleNewTask(e: ChangeEvent<HTMLInputElement>) {
    setNewTask(e.target.value)
  }

  function deleteTask(taskDelete:string) {
    const taskFilter = tasks.filter((task) => task !== taskDelete)
    setTasks(taskFilter)
  }


  
  return (
   <>
     <div className={styles.formTask}>
      <form onSubmit={handleTask}>
        <input placeholder='Adicione uma nova tarefa' type="text" value={newTask} onChange={handleNewTask} />
        <button type='submit'>Criar <PlusCircle size={16} weight="bold" /></button>
      </form>
    </div>
    <Task tasks={tasks}  onDeleteTask={deleteTask}/>
   </>
  )
}

export default FormTask