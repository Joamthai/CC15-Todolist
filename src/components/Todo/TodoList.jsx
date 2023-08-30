import React from 'react'
import styles from './TodoList.module.scss'
import {FaPen,FaTrashAlt } from 'react-icons/fa';

function TodoList() {
  return (
    <ul>
      <li className={styles.todo}>
        <span className={styles.todo__checkbox}>
        </span>
          <p className={styles.todo__task}>TodoItem 1</p>
        <span className={styles.todo__date}>30 Aug</span>
      <div className={styles.todo__action}>
        <span className={styles.todo_edit}>
          <FaPen/>
        </span>
        <span className={styles.todo_delete}>
          <FaTrashAlt/>
        </span>
      </div>
        </li>
    </ul>
  )
}

export default TodoList