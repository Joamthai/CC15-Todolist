import { useState } from 'react';

import styles from './TodoLists.module.scss';
import TodoItem from './TodoItem';

// todoObj : {id:number, task:string, status:boolen, due_date:string}
// dataRender = Array[] <TodoItem task=... done=... date=.../>

// const data = [
// {   "id": 1, 
//     "task": "Suspendisse potenti.", 
//     "status": false, 
//     "due_date": "2023-04-26" 
// },
// {
//     "id": 2,
//     "task": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
//     "status": false,
//     "due_date": "2023-05-08"
// },
// {
//     "id": 3,
//     "task": "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
//     "status": false,
//     "due_date": "2023-04-30"
// },]

function TodoLists(props) {
  // CRUD = Create-Read-Update-Delete
  // const [allTodos, setAllTodos] = useState(data)

  // RenderList#1
  // const dataRender = data.map((todoObj)=><TodoItem key={todoObj.id} task={todoObj.task} done={todoObj.status} date={todoObj.due_date}/>)
  // return (
  //   <ul className={styles.todo__lists}>{dataRender}</ul>
  // );

  // RenderList#2
  // return <ul className={styles.todo__lists}>{data.map((todoObj)=><TodoItem key={todoObj.id} task={todoObj.task} done={todoObj.status} date={todoObj.due_date}/>)}</ul>

  return <ul className={styles.todo__lists}>{props.data.map(todoObj => (
    <TodoItem 
    key={todoObj.id} 
    id={todoObj.id}
    task={todoObj.task} 
    done={todoObj.status} 
    date={todoObj.due_date} />
  ))}
  </ul>
}

export default TodoLists;
