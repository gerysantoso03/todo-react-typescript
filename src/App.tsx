import React, { useState } from "react";
import { AddTodoForm } from "./AddTodoForm";
import { TodoList } from "./TodoList";
import { AddTodo, Todo, ToggleTodo } from "./types";

// List of todos
const initialTodos: Array<Todo> = [
  {
    todoName: "ngendarain mobil",
    todoComplete: false,
  },
  {
    todoName: "Beli vespa",
    todoComplete: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  // function to toggle todos
  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodo = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          todoComplete: !todo.todoComplete,
        };
      }
      return todo;
    });
    setTodos(newTodo);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== " " &&
      setTodos([...todos, { todoName: newTodo, todoComplete: false }]);
  };

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </React.Fragment>
  );
}

export default App;
