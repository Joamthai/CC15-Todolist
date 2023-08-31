import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';

import TodoForm from './TodoForm'
import styles from './TodoCreate.module.scss';

// Concept#1 : true ? <Add Task/> : <TodoFrom/>
// Concept#2 : onClick : FN will be run after clicked
// Concept#3 : Js Value can't make React Rerender, must use State
// Concept#3 : React state
//      const [state, setState] = useState(initial:any)
//        element 1 : current State
//        element 2 : FN for State

// #1 : Function Component (Render)
function TodoCreate() {
  // HOOK FN
  const [isOpenForm, setIsOpenForm] = useState(false)
  console.log(isOpenForm)

  let active = true

  // #2 : JS Function (Logic)
  const handleClick = function(event) {
    console.log('clicked')
    setIsOpenForm(!isOpenForm)
    // active = !active;
    // console.log('clicked', active)
  }
  return (
    <>
    {isOpenForm ?  <TodoForm /> :
    (<div className={styles.todo__create} onClick={handleClick}>
      <div className={styles.todo__create__button}>
        <HiPlus />
      </div>
      <h3 className={styles.todo__create__text}>Add Task</h3>
    </div>)
    }
    </>
  );
}

export default TodoCreate;
