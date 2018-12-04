import React from "react";

import "./TodoList.css";

interface ITodoListProps {
  todoItems: string[];
}

const TodoList = ({ todoItems }: ITodoListProps) => (
  <div className="todo-list">
    <ul>
      {todoItems.map((todoItem: string) => (
        <li>{todoItem}</li>
      ))}
    </ul>
  </div>
);

export default TodoList;
