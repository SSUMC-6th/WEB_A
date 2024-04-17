import { useCallback, useState } from 'react'

function TodoList({todos}) {
  const todoItems = todos&&todos.filter(todo => !todo.isDone);

  const onIsDone = useCallback(
    (id) => {
      setTodos(todos => (todos.map(todo =>
        (todo.id === id ? {...todo, isDone: !todo.isDone} : todo)  
      )));
    },
    [todos],
  );

  return (
    <>
        <div className='todo-list'>
            <h3>해야할 일</h3>
            <hr width="90%" color="white"/>
            <ul id='todoList'>
            {todoItems.map(todo => (
            <li key={todo.id}>
              <span className="todo-data">{todo.content}</span>
              <button className="done-button" onClick={() => onIsDone(todo.id)}>완료</button>
            </li>
            ))}
            </ul>
        </div>
    </>
  )
}

export default TodoList
