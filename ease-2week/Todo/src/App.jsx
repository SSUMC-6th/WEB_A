import React, { useState, useRef, useCallback } from 'react'
import './App.css'
import TodoContainer from './components/TodoContainer'
import InsertTodo from './components/InsertTodo'
//import TodoListItem from './components/TodoListItem'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "Send E-mail", isDone: false },
    { id: 2, content: "Make Work-Books", isDone: false },
    { id: 3, content: "Sleeping", isDone: true },
    { id: 4, content: "Watching You-Tube", isDone: true },
  ]);

  const nextId=useRef(5);
  const onInsert = useCallback(
    (text) => {
      const todo={
        id: nextId.current,
        content: text,
        isDone: false
      };
      setTodos(todos.concat(todo));
      nextId.current++;
    }, [todos]
  )
  //todo에서 done으로 옮기기 id를 받아와서?
  const onToggleDone = useCallback((id)=>{
    const movetodo = todos.map(todo=>
      todo.id === id ? {...todo, isDone: !todo.isDone} : todo)
    setTodos(movetodo)
  }, [todos])
  //done에 있던 content 아예 삭제하기
  const onDelete = useCallback((id)=>{
    setTodos(todos.filter(todo => todo.id !== id))
  }, [todos])


  return (
    <>
      <h1>UMC Study Plan</h1>
      <hr/>
      <InsertTodo onInsert={onInsert}/>
      <TodoContainer todos={todos} onToggleDone={onToggleDone} onDelete={onDelete}/>
    </>
  )
}

export default App
