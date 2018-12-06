import React from "react";
import TodoList from "./TodoList";
import "./Todo.css";

interface ITodoState {
  value: string;
  todoItems: string[];
}

class Todo extends React.Component<{}, ITodoState> {
  state: ITodoState = { value: "", todoItems: [] };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!this.state.value.trim()) return;
    this.setState((state: ITodoState) => ({
      value: "",
      todoItems: [state.value, ...state.todoItems]
    }));
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ value: e.currentTarget.value });
  };

  render() {
    const { value, todoItems } = this.state;
    return (
      <React.Fragment>
        <div className="todo-container">
          <form onSubmit={this.handleSubmit} className="todo-form">
            <input
              type="text"
              name="todoInput"
              onChange={this.handleChange}
              value={value}
            />
            <input type="submit" value="+" />
          </form>
          <TodoList todoItems={todoItems} />
        </div>
      </React.Fragment>
    );
  }
}

export default Todo;
