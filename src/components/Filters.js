import React, { Component } from "react";
import { connect } from "react-redux";
import { showAll, showDone, showIncomplete } from "../actions/action";

class Filters extends Component {
  render() {
    return (
      <div className="details">
        <div className="details-wrapper">
          <div
            className="total-items filter-btn"
            onClick={() => this.props.filterAll()}
            style={{
              width: 40,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5
            }}
          >
            All
          </div>

          <div
            className="done-items filter-btn"
            onClick={() => this.props.filterDone()}
          >
            Completed
          </div>

          <div
            className="undone-items filter-btn"
            onClick={() => this.props.filterIncomplete()}
            style={{ borderTopRightRadius: 5, borderBottomRightRadius: 5 }}
          >
            Incompleted
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterIncomplete: () => {
      dispatch(showIncomplete());
    },

    filterDone: () => {
      dispatch(showDone());
    },

    filterAll: () => {
      dispatch(showAll());
    }
  };
};

const Filter = connect(
  null,
  mapDispatchToProps
)(Filters);

export default Filter;
