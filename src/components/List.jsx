import './List.scss'
import React from 'react'
import Listitem from './Listitem'

/*
props = {
    list : Array<{
        id:number,
        text:string,
        icon:<Component/>,
        active:true
    }>
}
*/

function List(props) {
  return (
    <ul className='list'>
        {props.data.map(obj=>(
            <Listitem key={obj.id} text={obj.text} icon={obj.icon} active={obj.active}/>
        ))}
    </ul>
  );
}

export default List