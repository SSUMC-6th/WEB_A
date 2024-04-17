import { useCallback, useRef, useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';


function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "Send E-mail", isDone: false },
    { id: 2, content: "Make Work-Books", isDone: false },
    { id: 3, content: "Sleeping", isDone: true },
    { id: 4, content: "Watching You-Tube", isDone: true },
  ]);

  const nextId = useRef(5);
  const addTodo = useCallback(
    (data) => {
      const todo = {
        id: nextId.current,
        data,
        isDone: false,
      };
      setTodos(todos.concat(todo));
      nextId.current++;
    },
    [todos],
  );

  return (
    <>
      <TodoInput addTodo={addTodo}></TodoInput>
      <div className='todo-box'>
        <TodoList todo={todos}/>
        <DoneList todo={todos}/>
      </div>
    </>
  )
}

export default App
