import React from "react";
import { connect } from "react-redux";

const Filter = ({ filter, filterFunction }) => {
  const setFilterValue = (e) => filterFunction(e.target.value);
  return (
    <>
      <label>
        Filter
        <input type='text' value={filter} onChange={setFilterValue} />
      </label>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    filter: state[ownProps.ident].filter,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    filterFunction: (value) => {
      dispatch(ownProps.callBack(value));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
