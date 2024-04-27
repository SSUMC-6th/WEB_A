import React from "react";

function TodoListItem({todo, onIsDone, onRemove}){
   const {id, content, isDone} = todo;
    return(
        <>
            <li>
                <span className="todo-content">{content}</span>
                {isDone ? 
                    <button className="done-button" onClick={() => onRemove(id)}>삭제</button> :
                    <button className="done-button" onClick={() => onIsDone(id)}>완료</button>
                }   
            </li>
        </>
    );
}

export default TodoListItem;