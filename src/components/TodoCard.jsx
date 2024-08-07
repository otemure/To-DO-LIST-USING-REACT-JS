// eslint-disable-next-line no-unused-vars
import React from "react";

export default function TodoCard(props) {
  // eslint-disable-next-line react/prop-types
  const { children, handleDeleteTodo, handleEditTodo, index } = props;

  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={() => handleEditTodo(index)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDeleteTodo(index)}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
