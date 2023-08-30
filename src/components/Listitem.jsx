import React from 'react'
import './Listitem.scss'

/*
props ={
    text:string
    icon:<Component/>
    active:Boolean
}
*/


function Listitem(props) {
    const listClassName = `list__item ${props.active? 'active':''}`
    // active=false => listClassName = 'list__item'
    // active=true => listClassName = 'list__item active'

    return (
    <li className={listClassName}>
        {props.icon}
        <p className="list__item__text">{props.text}</p>
    </li>
  )
}

// CSS + JS Value == DynamicsClassName
// not active: <p className="list__item ">
// active: <p className="list__item active">


export default Listitem