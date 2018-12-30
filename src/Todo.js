import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.todo}
        <button onClick={() => this.props.removeTodo(this.props.id)}>X</button>
        <button onClick={() => this.props.showEditForm(this.props.id)}>
          Edit
        </button>
        <button onClick={() => this.props.toggleCompleted(this.props.id)}>
          Mark As Completed
        </button>
      </div>
    );
  }
}

export default Todo;
