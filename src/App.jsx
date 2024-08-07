import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const todoToEdit = todos[index];
    setCurrentTodo({
      text: todoToEdit,
      index: index,
    });
    setIsEditing(true);
  }

  function handleUpdateTodo(updatedTodo) {
    const updatedTodos = todos.map((todo, index) =>
      index === currentTodo.index ? updatedTodo : todo
    );
    setTodos(updatedTodos);
    setIsEditing(false);
    setCurrentTodo({});
  }

  return (
    <>
      <TodoInput
        handleAddTodos={handleAddTodos}
        handleUpdateTodo={handleUpdateTodo}
        isEditing={isEditing}
        currentTodo={currentTodo}
      />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </>
  );
}

export default App;
