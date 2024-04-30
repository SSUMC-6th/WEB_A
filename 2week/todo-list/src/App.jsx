import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputTodo from './components/InputTodo'
import ListItem from './components/ListItem'

function App() {

  const [todos, setTodos] = useState([
    { id: 1, content: "Send E-mail", isDone: false },
    { id: 2, content: "Make Work-Books", isDone: false },
    { id: 3, content: "Sleeping", isDone: true },
    { id: 4, content: "Watching You-Tube", isDone: true },
  ]);

  const addList = (content) => {
    const newTodo = {
      id: todos.length +1,
      content: content,
      isDone: false,
    };
    setTodos([...todos, newTodo])
    console.log(todos)
  };

  // useEffect(() => {
  //   console.log(todos);
  // }, [todos]);
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const doneTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isDone: true };
      }
      return todo;
    }));
  }

  return (
    <div id="wrapper">
      <h1>UMC Study Plan</h1>
      <hr/>
      <InputTodo addList={addList}/>
      <ListItem todos={todos} deleteTodo={deleteTodo} doneTodo={doneTodo}/>
    </div>
  )
}

export default App
