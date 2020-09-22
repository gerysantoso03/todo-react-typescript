import React, { ChangeEvent, FormEvent, useState } from "react";
import { AddTodo } from "./types";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FunctionComponent<AddTodoFormProps> = ({
  addTodo,
}) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };
  return (
    <form action="">
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Add todo
      </button>
    </form>
  );
};
