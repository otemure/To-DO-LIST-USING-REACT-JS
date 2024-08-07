/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  // eslint-disable-next-line react/prop-types
  const { todos, handleDeleteTodo, handleEditTodo } = props;

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <ul className="main">
      {todos.map((todo, todoIndex) => (
        <TodoCard
          key={todoIndex}
          index={todoIndex}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
        >
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
}
