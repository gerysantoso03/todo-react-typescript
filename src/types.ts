// Type todo, same with todolistitem
export type Todo = {
  todoName: string;
  todoComplete: boolean;
};

export type ToggleTodo = (selectedTodo: Todo) => void;

export type AddTodo = (newTodo: string) => void;
