import React from 'react';

function ListItem({ todos, deleteTodo, doneTodo}) {

    return (
      <div className="container">
        <div className="tasks-container">
          <h2>할 일</h2>
          <div id="taskList">
            {todos.filter(todo => !todo.isDone).map(todo => (
              <div key={todo.id}>
                {todo.content}

                <button onClick={() => doneTodo(todo.id)}>완료</button>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: 80 }} />
        <div className="tasks-container">
          <h2>해낸 일</h2>
          <div id="completedTasks">
            {todos.filter(todo => todo.isDone).map(todo => (
              <div key={todo.id}>
                {todo.content}
                <button onClick={() => deleteTodo(todo.id)}>삭제</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

export default ListItem;
