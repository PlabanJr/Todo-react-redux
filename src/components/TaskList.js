import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTask, toggle, update } from "../actions/action";

class TaskList extends Component {
  render() {
    let filteredState = { filter: "", todoArr: [] };

    if (this.props.filter === "SHOW_ALL" || this.props.filter === "") {
      filteredState.todoArr = this.props.tasks;
    }

    if (this.props.filter === "SHOW_DONE") {
      filteredState.todoArr = this.props.tasks.filter(
        state => state.isCompleted
      );
    }

    if (this.props.filter === "SHOW_INCOMPLETE") {
      filteredState.todoArr = this.props.tasks.filter(
        state => !state.isCompleted
      );
    }
    return (
      <ul>
        {filteredState.todoArr.map((task, i) => (
          <li key={i} className="list-item">
            <div className="left-sub">
              <input
                className="checkbox"
                type="checkbox"
                checked={task.isCompleted ? true : false}
                onChange={() => this.props.mark(i)}
              />

              <div className="item-desc">
                <input
                  type="text"
                  className="item-desc-input"
                  value={task.caption}
                  onChange={event => this.props.handleUpdate(i, event)}
                  disabled={task.isCompleted ? true : false}
                  style={{
                    textDecoration: task.isCompleted ? "line-through" : "none"
                  }}
                  onKeyPress={event => this.props.handleEnter(event)}
                />
              </div>
            </div>

            <span
              className="del_btn"
              onClick={() => {
                this.props.handleDelete(i);
              }}
            >
              <i className="fas fa-times" />
            </span>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.todoArr,
    filter: state.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    mark: i => {
      dispatch(toggle(i));
    },
    handleUpdate: (i, event) => {
      dispatch(update(i, event.target.value));
    },
    handleEnter: event => {
      if (event.key === "Enter" && event.target.value) event.target.blur();
    },
    handleDelete: i => {
      var message = "Do you really want to delete the task?";
      if (window.confirm(message)) dispatch(deleteTask(i));
    }
  };
};

const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);

export default TodoList;
