import React, { Component } from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import TodoList from "./components/TaskList";
import Filter from "./components/Filters";

class App extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <div className="input-area">
          <AddForm />
        </div>

        <div className="list">
          <TodoList />
        </div>

        <Filter />
      </div>
    );
  }
}

export default App;
