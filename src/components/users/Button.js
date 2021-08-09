import React from "react";
import { connect } from "react-redux";
import { addCount } from "../../redux/users/usersActions";

const Button = ({ counter, addCount }) => {
  return (
    <>
      <p>Count: {counter}</p>
      <button onClick={() => addCount()}>+++++++++++++++++++++</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.projectUsers.counter,
  };
};

export default connect(mapStateToProps, { addCount })(Button);
