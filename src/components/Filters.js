import React, { Component } from "react";
import { connect } from "react-redux";
import { showAll, showDone, showIncomplete } from "../actions/action";

class Filters extends Component {
  state = { 
    activeIndex: 0
  }

  render() {
    const {activeIndex} = this.state

    return (
      <div className="details">
        <div className="details-wrapper">
          <div
            className="total-items filter-btn"
            onClick={() => {
              this.setState({activeIndex: 0})
              this.props.filterAll()
            }}
            style={
                {
                  width: 40,
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                  backgroundColor: activeIndex === 0 ? "#ddd" : null
                }
            }
          >
            All
          </div>

          <div
            className="done-items filter-btn"
            onClick={() => {
              this.setState({activeIndex: 1})
              this.props.filterDone()
            }}
            style={{ backgroundColor: activeIndex === 1 ? "#ddd" : null }}
          >
            Completed
          </div>

          <div
            className="undone-items filter-btn"
            onClick={() => {
              this.setState({activeIndex: 2})
              this.props.filterIncomplete()
            }}
            style={{ borderTopRightRadius: 5, borderBottomRightRadius: 5, backgroundColor: activeIndex === 2 ? "#ddd" : null }}
          >
            Incomplete
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
