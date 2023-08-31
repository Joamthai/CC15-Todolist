import React, { useState } from 'react'
import {FaPen,FaTrashAlt } from 'react-icons/fa';

import TodoForm from './TodoForm'
import styles from './TodoList.module.scss'

function TodoList() {
const [isEditForm, setIsEditForm] = useState(false)
  const handleClick = () => setIsEditForm(!isEditForm)

  return (
    <ul>
        {isEditForm ? <TodoForm textSubmit='Edit Task'/> :
        (<li className={styles.todo}>
          <span className={styles.todo__checkbox}>
        </span>
          <p className={styles.todo__task}>TodoItem 1</p>
        <span className={styles.todo__date}>30 Aug</span>
      <div className={styles.todo__action}>
        <span onClick={handleClick}>
          <FaPen className={styles.todo_edit}/>
        </span>
        <span className={styles.todo_delete}>
          <FaTrashAlt/>
        </span>
      </div>
        </li>)}
    </ul>
  )
}

export default TodoList