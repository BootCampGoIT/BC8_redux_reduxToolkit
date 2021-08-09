import React, { Component } from "react";
import { connect } from "react-redux";
import { resetError } from "../../redux/users/usersActions";
import { errorSelector, isLoadingSelector } from "../../redux/users/userSelectors";
import {
  addUserOperation,
  getUsersOperation,
} from "../../redux/users/usersOperations";

const initialState = {
  name: "",
  email: "",
};

class UsersForm extends Component {
  state = { ...initialState };

  componentDidMount() {
    this.props.getUsersOperation();
  }

  onHandleChange = (e) => {
    if (this.props.error) {
      this.props.resetError();
    }
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = async (e) => {
    e.preventDefault();
    this.props.addUserOperation({ ...this.state });
    this.setState({ ...initialState });
  };

  render() {
    return (
      <>
        {this.props.isLoading && <p>...loading</p>}
        {this.props.error && <p>{this.props.error}</p>}
        <form onSubmit={this.onHandleSubmit}>
          <label>
            Name
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            Email
            <input
              type='text'
              name='email'
              value={this.state.email}
              onChange={this.onHandleChange}
            />
          </label>
          <button type='submit'>Add user</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: isLoadingSelector(state),
    error: errorSelector(state),
  };
};

export default connect(mapStateToProps, {
  addUserOperation,
  getUsersOperation,
  resetError,
})(UsersForm);
