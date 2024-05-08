import React from 'react'

function TodoListItem({todos, onToggle}){
    
    return (
        <ul className="TodoList">
            {todos.map(todos=>(
            <li key={todos.id}className="TodoListItem">
                <div className="contentContainer">
                    <div className="content">{todos.content}</div>
                    <div className="Isdone">
                        <button type="button" onClick={()=>onToggle(todos.id)}>{todos.isDone ? '삭제':'완료'}</button>
                    </div>
                </div>
                <hr/>
            </li>
            ))}
        </ul>
    )
}

export default TodoListItem