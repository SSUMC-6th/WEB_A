import React from "react";
import TodoListItem from "./TodoListItem";

function TodoContainer({todos, onIsDone, onRemove}){
    return(
      <>
        <div className='container'>
          <h4>해야할 일</h4>
          <ul id='todoList'>
            {todos.filter((todo) => !todo.isDone).map((ingTodo) => (
              <TodoListItem
                todo={ingTodo}
                key={ingTodo.id}
                onIsDone={onIsDone}
                onRemove={onRemove}
              />
              ))
            }
          </ul>
        </div>

        <div className="gap"></div>

        <div className='container'>
        <h4>해낸 일</h4>
        <ul id='todoList'>
            {todos.filter((todo) => todo.isDone).map((doneTodo) => (
              <TodoListItem
                todo={doneTodo}
                key={doneTodo.id}
                onIsDone={onIsDone}
                onRemove={onRemove}
              />
              ))
            }
        </ul>
        </div>
    </>   
    );
}

export default TodoContainer;