import React, { Component } from 'react';
import './EditTodoForm.css';

class EditTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editTask: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.editTodo(this.state.editTask);
    this.setState({
      editTask: ''
    });
  }

  render() {
    return (
      <div className={this.props.className}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="editTask">Edit Todo: </label>
          <input
            type="text"
            name="editTask"
            onChange={this.handleChange}
            value={
              this.state.editTask === ''
                ? this.props.currEditingText
                : this.state.editTask
            }
            id="editTask"
          />
          <button>Edit</button>
        </form>
      </div>
    );
  }
}

export default EditTodoForm;
