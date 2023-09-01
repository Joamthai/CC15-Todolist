// Dependencies
import './App.scss';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import dayjs from 'dayjs';

import AppBar from '../components/Common/AppBar/AppBar';
import SideBar from '../components/SideBar/SideBar';
import TodoHeader from '../components/Todo/TodoHeader';
import TodoCreate from '../components/Todo/TodoCreate';
import TodoLists from '../components/Todo/TodoLists';

const data = [
  {   "id": 1, 
      "task": "Suspendisse potenti.", 
      "status": false, 
      "due_date": "2023-04-26" 
  },
  {
      "id": 2,
      "task": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "status": false,
      "due_date": "2023-05-08"
  },
  {
      "id": 3,
      "task": "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
      "status": false,
      "due_date": "2023-04-30"
  },]

function App() {
  const [allTodos, setAllTodos] = useState(data)

  // add
  const addTodo = function(taskName){
    const newTodo = {
      id:nanoid(),
      task:taskName,
      status: false,
      due_date: dayjs().format('YYYY-MM-DD')
    }
    setAllTodos(p => [newTodo,...p])
  }

  // const [isDelete, setIsDelete] = useState(id)

  // delete
  const deleteTodo = function (id) {
    // const newTodoList = allTodos.filter((todo)=>todo.id !== id)
    // setAllTodos(newTodoList)

    setAllTodos((prev)=> prev.filter((todo)=>todo.id !== id))
  }

  // edit
  const editTodo = function(id, newTodoObj){
    /*
    let foundTodo = allTodos.find(todo => todo.id === id)
    console.log(foundTodo)
    if(!foundTodo) return;
    const newTodo = Object.assign({}, foundTodo, newTodoObj)
    let foundIndex = allTodos.findIndex(todo => todo.id === id)
    if(foundIndex === -1) return

    const newTodoList = [...allTodos]
    newTodoList.splice(foundIndex, 1, newTodo)
    setAllTodos(newTodoList)
    */
    /*
    const newTodoList = allTodos.map(function(todo){
      if(todo.id !== id) return todo;
      else return {...todo,...newTodoObj};
    });
    setAllTodos(newTodoList)
    */
    const newTodoList = allTodos.reduce((acc, todo)=>{
      if(todo.id !== id) acc.push(todo)
      else acc.push({...todo, ...newTodoObj})
    return acc
    },[])
    setAllTodos(newTodoList)
  }



  return (
    <div className='todo'>
      <div className='todo__header'>
        <AppBar />
      </div>
      <div className='todo__sidebar'>
        <SideBar />
      </div>
      <div className='todo__content'>
        <main className='todo__container'>
          <TodoHeader />
          <TodoCreate addTodo={addTodo}/>
          <TodoLists 
          data={allTodos} 
          deleteTodo={deleteTodo} 
          editTodo={editTodo}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
