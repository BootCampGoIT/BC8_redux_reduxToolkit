import React, { Component } from "react";
import { connect } from "react-redux";
import { addProjectOperation } from "../../redux/projects/projectsOperations";

const initialState = {
  name: "",
};

class ProjectsForm extends Component {
  state = { ...initialState };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addProjectOperation(this.state);
    this.setState({ ...initialState });
  };
  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          Name
          <input
            type='text'
            name='name'
            value={name}
            onChange={this.onHandleChange}
          />
        </label>
        <button type='submit'>Add project</button>
      </form>
    );
  }
}

export default connect(null, { addProjectOperation })(ProjectsForm);
