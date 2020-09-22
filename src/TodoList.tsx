import React from "react";
import { TodoListItem } from "./TodoListItem";
import { Todo, ToggleTodo } from "./types";

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FunctionComponent<TodoListProps> = ({
  todos,
  toggleTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoListItem
            key={todo.todoName}
            todo={todo}
            toggleTodo={toggleTodo}
          />
        );
      })}
    </ul>
  );
};
