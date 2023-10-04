/* eslint-disable @typescript-eslint/no-explicit-any */
import { Trash } from '@phosphor-icons/react'
import styles from './styles.module.scss'
import notes from '../../assets/notes.svg'
import { useState } from 'react'


interface TaskProps {
  tasks: string[]
  onDeleteTask: (taskDelete: string) => void,
}

const Task = ({tasks, onDeleteTask}: TaskProps)  => { 
  const [taskComplete, setTaskComplete] = useState(0)
  
  function handleDeleteTask(task: string) {
    onDeleteTask(task)

    if(taskComplete !== 0) {
      setTaskComplete((state)  => state - 1)
    }

  }

  function handleCompleteTask(event: any) {
    const elementoClicado = event.target.id 

    if(elementoClicado === 'contentTask') {

    const elementoClicado = event.target.children[1]
    const checkClick = event.target.children[0]
    const checkComplete = checkClick.classList.contains(styles.uncheckbox)
    const elementComplete = elementoClicado.classList.contains(styles.active)
    
    if(checkComplete) {
      checkClick.classList.remove(styles.uncheckbox)
      checkClick.classList.add(styles.checkbox)
      checkClick.classList.add(styles.active)
      setTaskComplete((state) => state + 1)

    } else {
      checkClick.classList.add(styles.uncheckbox)
      checkClick.classList.remove(styles.active)
      
    }
    
    if(elementComplete) {
      elementoClicado.classList.remove(styles.active)
      setTaskComplete((state) => state - 1)
      return 
    }
    elementoClicado.classList.add(styles.active)
      
    } else {
    const elementoClicado = event.target
    const elementComplete = elementoClicado.classList.contains(styles.active)
    const checkClick = event.target.previousElementSibling
  
    const checkComplete = checkClick.classList.contains(styles.uncheckbox)
   

    if(checkComplete) {
      checkClick.classList.remove(styles.uncheckbox)
      checkClick.classList.add(styles.checkbox)
      checkClick.classList.add(styles.active)
      setTaskComplete((state) => state + 1)


    } else {
      checkClick.classList.add(styles.uncheckbox)
      checkClick.classList.remove(styles.active)
      setTaskComplete((state) => state - 1)


    }
    
    if(elementComplete) {
      return elementoClicado.classList.remove(styles.active)
    }
    elementoClicado.classList.add(styles.active)
      
    }
  }

  const isTask = tasks.length > 0
  return (
    <div className={styles.task}>
      <header>
        <div className={styles.taskCreate}>
          <strong>Tarefas criadas</strong>
          <span>{tasks.length}</span>
        </div>
        <div className={styles.taskComplete}>
          <strong>Concluídas</strong>
          <span>{taskComplete} de {tasks.length}</span>
        </div>
      </header>
      {isTask ? (
     <div>
      {tasks.map((task, index) => (
        <div key={index} className={styles.taskContainer}>
          <div id='contentTask' className={styles.contentTask} 
          onClick={handleCompleteTask}>

          <div id='check' className={`${styles.uncheckbox}`}>
           
          </div>

          <p id='paragraph' className={styles.taskContent}>{task}</p>
          </div>

          <Trash size={24} onClick={() => handleDeleteTask(task)}/>
      </div>
      ))}

     </div>     
      ): (
      <div className={styles.noTask}> 
        <img src={notes} alt="" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>

      )}
    </div>
  )
}

export default Task