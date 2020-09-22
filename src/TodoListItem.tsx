import React from "react";
import { Todo, ToggleTodo } from "./types";
import "./Todo.css";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FunctionComponent<TodoListItemProps> = ({
  todo,
  toggleTodo,
}) => {
  return (
    <div>
      <label className={todo.todoComplete ? "complete" : undefined}>
        <input
          type="checkbox"
          checked={todo.todoComplete}
          onChange={() => toggleTodo(todo)}
        />
        {todo.todoName}
      </label>
    </div>
  );
};
