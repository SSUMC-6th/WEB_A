import React from 'react'
import TodoListItem from './TodoListItem'

function TodoContainer({todos, onToggleDone, onDelete}){
    const todo = todos.filter(todos=>!todos.isDone);
    const done = todos.filter(todos=>todos.isDone);
    
    return (
        <>
        <span className="container">
            <div className="todo">
                해야 할 일
                <hr/>
                <TodoListItem todos={todo} onToggle={onToggleDone}/>
            </div>
            <div className="done">
                해낸 일
                <hr/>
                <TodoListItem todos={done} onToggle={onDelete}/>
            </div>
        </span>
        </>
    );
}

export default TodoContainer