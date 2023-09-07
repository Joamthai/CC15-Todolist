// Dependencies
import './App.scss';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import dayjs from 'dayjs';

import AppBar from '../components/Common/AppBar/AppBar';
import SideBar from '../components/SideBar/SideBar';
import TodoHeader from '../components/Todo/TodoHeader';
import TodoCreate from '../components/Todo/TodoCreate';
import TodoLists from '../components/Todo/TodoLists';

// const data = [
//   {   "id": 1, 
//       "task": "Suspendisse potenti.", 
//       "status": false, 
//       "due_date": "2023-04-26" 
//   },
//   {
//       "id": 2,
//       "task": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
//       "status": false,
//       "due_date": "2023-05-08"
//   },
//   {
//       "id": 3,
//       "task": "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
//       "status": false,
//       "due_date": "2023-04-30"
//   },]

const END_POINT = 'http://localhost:8080/api/todos'

function App() {
  const [allTodos, setAllTodos] = useState([])

  useEffect(()=>{
    // fetchAllTodo
    async function fetchAllTodo(){
      try{
        let response = await fetch('http://localhost:8080/api/todos',{method:'GET'})
        let todoData = await response.json()
      const newTodoLists = todoData.todos.map(todo => {
        const newTodo = {...todo, due_date: todo.date}
        delete todo.date
        return newTodo
      })
        setAllTodos(newTodoLists)
      }catch(error){
        console.log(error)
      }
    }
    fetchAllTodo()
  },[])

  // add
  const addTodo = async function(taskName){
    const newTodo = {
      task:taskName,
      status: false,
      due_date: dayjs().format('YYYY-MM-DD')
    }
    try {
      // SEND REQUEST
      const option = {method:'POST',
      headers: {'Content-type': 'application/json'},
      body:JSON.stringify(newTodo)}
      let response = await fetch(END_POINT, option)
      let data = await response.json()
      const createdTodo = {...data.todo, due_date: data.todo.date}
      delete createdTodo.date

      setAllTodos(p => [createdTodo,...p])
    }catch (error){
      console.log(error)
    }
  }

  // delete
  const deleteTodo = async function (todoId) {
  try{
    const option ={method:'DELETE'};
    let response = await fetch(`${END_POINT}/${todoId}`,option);
    if(response.status === 204){
      setAllTodos(prev => prev.filter(todo => todo.id !== todoId))
    }
  }catch(error){
  console.log(error)
  }

  }

  // edit
  const editTodo = async function(todoId, updateTodoObj){
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
   /*
    const newTodoList = allTodos.reduce((acc, todo)=>{
      if(todo.id !== id) acc.push(todo)
      else acc.push({...todo, ...newTodoObj})
      return acc
    },[])
    setAllTodos(newTodoList)
    */
    // FindTodo
    try {
      let foundIndex = allTodos.findIndex(todo => todo.id === todoId)
      if(foundIndex !== -1){
        const updateTodo = {...allTodos[foundIndex], ...updateTodoObj}
        updateTodo.date = updateTodo.due_date
        const option = {method:'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updateTodo),
        }
    const response = await fetch(`${END_POINT}/${todoId}`,option)
    const data = await response.json()
    console.log(data.todo)

    // UpdateState
    const newTodoList = [...allTodos]
    newTodoList[foundIndex] = {...data.todo, due_date: data.todo.date}
    setAllTodos(newTodoList)

    }
    }catch(error){
      console.log(error)
    }
    
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
