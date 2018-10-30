import React from "react";
import "./Todo.css";

class Todo extends React.Component {
  state = {};

  render() {
    return (
      <div className="todo-container">
        <h1>Todo</h1>
        <form>
          <input />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default Todo;
