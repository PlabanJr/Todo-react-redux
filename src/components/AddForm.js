import React, { Component } from "react";
import { addTask, markAll } from "../actions/action";
import { connect } from "react-redux";

class Form extends Component {
  render() {
    return (
      <form
        method="POST"
        id="add-form"
        onSubmit={event => this.props.submit(event)}
      >
        <i
          className="fas fa-chevron-down check-all"
          id="check-all-btn"
          onClick={() => this.props.checkAll()}
        />
        <input
          type="text"
          name="taskItem"
          placeholder="What needs to be done?"
          className="input-field"
          id="user-input"
          required
        />
        <input type="submit" className="submit-button" />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    submit: event => {
      event.preventDefault();
      if (!event.target[0].value.length) {
        return;
      }
      dispatch(addTask(event.target[0].value));
      event.target[0].value = "";
    },

    checkAll: () => {
      dispatch(markAll());
    }
  };
};

const AddForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default AddForm;
