import React, { Component } from 'react';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
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
    this.props.createTodo(this.state);
    this.setState({
      task: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">Add Todo: </label>
          <input
            type="text"
            name="task"
            onChange={this.handleChange}
            value={this.state.task}
            id="task"
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
