import { useState, useEffect } from "react";

export default function TodoInput(props) {
  // eslint-disable-next-line react/prop-types
  const { handleAddTodos, handleUpdateTodo, isEditing, currentTodo } = props;
  const [todoValue, setTodoValue] = useState("");

  useEffect(() => {
    if (isEditing) {
      // eslint-disable-next-line react/prop-types
      setTodoValue(currentTodo.text);
    } else {
      setTodoValue("");
    }
  }, [isEditing, currentTodo]);

  const handleSubmit = () => {
    if (isEditing) {
      handleUpdateTodo(todoValue);
    } else {
      handleAddTodos(todoValue);
    }
    setTodoValue("");
  };

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="enter to-do"
      />
      <button onClick={handleSubmit}>
        {isEditing ? "UPDATE" : "ADD"}
      </button>
    </header>
  );
}
