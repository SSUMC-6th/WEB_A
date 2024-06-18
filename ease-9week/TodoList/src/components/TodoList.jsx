import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { remove, complete } from '../redux/todoSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ListSt = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const CheckboxSt = styled.input`
  margin-right: 10px;
`;

const TodoTextSt = styled.div`
  flex: 1;
  text-align: left;

  del {
    color: #999;
  }
`;

const DeleteBtnSt = styled.button`
  background: none;
  border: none;
  color: #888;
  cursor: pointer;

  &:hover {
    color: #ff0000;
  }
`;

export default function TodoList() {
  const todolist = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const trashIcon = <FontAwesomeIcon icon={faTrashCan} />;

  console.log(todolist);

  const todolistView = todolist && todolist.map((todo, idx) => (
    <ListSt key={todo.id}>
      <CheckboxSt
        type="checkbox"
        checked={todo.complete}
        onChange={() => dispatch(complete(todo.id))}
      />
      <TodoTextSt>
        {todo.complete === false ? (
          <>{todo.text}</>
        ) : (
          <del>{todo.text}</del>
        )}
      </TodoTextSt>
      <DeleteBtnSt
        type="button"
        onClick={() => dispatch(remove(todo.id))}
      >
        {trashIcon}
      </DeleteBtnSt>
    </ListSt>
  ));

  return (
    <ul>{todolistView}</ul>
  );
}
