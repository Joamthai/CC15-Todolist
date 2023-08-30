import './App.scss';
import Header from '../components/Header';
import {FaInbox,FaCalendar,FaCalendarAlt,FaChevronDown} from 'react-icons/fa';

import List from '../components/List';
import TodoHeader from '../components/Todo/TodoHeader';
import TodoCreate from '../components/Todo/TodoCreate';
import TodoList from '../components/Todo/TodoList';
// import Listitem from './Listitem';

function App() {

  const generalList = [
    {id:1, text:'Inbox', icon:<FaInbox/>, active:true},
    {id:2, text:'Today', icon:<FaCalendar/>, active:false},
    {id:3, text:'Next 7 days', icon:<FaCalendarAlt/>, active:false},
  ];
  const projectList = [
    {id:4, text:'Project-A', icon:<FaInbox/>, active:true},
    {id:5, text:'Project-B', icon:<FaInbox/>, active:false},
  ];

  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar_category">
            <List data={generalList}/>
          </section>
          <section className="sidebar_category">
            <div className='accordion'>
              <div className='accordion__toggle'></div>
              <li className='accordion__item'>
                <FaChevronDown className='accordion__item__icon accordion__item__active'/>
                <p className='accordion__item__text'>Projects</p>
              </li>
              <List data={projectList}/>
            </div>
          </section>
        </aside>
      </div>
      <div className="todo__content">
        <main className='todo__container'>
          <TodoHeader/>
          <TodoCreate/>
          <TodoList/>
          
        
        </main>
      </div>
    </div>
  );
}

export default App;


/*
Challenge : Refactor
- ให้ 2 section render UI ที่...
- OptionA (2/5) : render ต่างกัน <List/> กับ <Accordion/>
- OptionB (4/5) : render UI เดียวกัน เช่น <List/>
- OptionC (5/5) : render <List/> ภายใต้ <Accordion><List/></Accordion>
*/