import React from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { remove , complete } from '../redux/todoSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { TodoLi, TodoUl, TodoCheck, TodoDiv, DelBtn, TodoLeftWrap } from './TodoList.style'

function TodoList() {
    const todolist = useSelector(state => state.todo)
    const dispatch = useDispatch()

    const trash = <FontAwesomeIcon icon={faTrashCan} />


    console.log(todolist)

    const todolistView = todolist.map((todo, idx) => (
    <TodoLi key={todolist[idx].id}>
        <TodoLeftWrap>
        <TodoCheck type="checkbox" 
        onChange={()=> dispatch(complete(todolist[idx].id))}/>
        <TodoDiv>{todo.complete === false ? <>{todo.text}</> : <del>{todo.text}</del>}</TodoDiv>
        </TodoLeftWrap>
        <DelBtn type="button" onClick={() => dispatch(remove(todolist[idx].id))}>{trash}</DelBtn>
    </TodoLi> 
    )
    )


  return (
      <>
        <TodoUl>{todolistView}</TodoUl>
      </>
  )
}

export default TodoList
