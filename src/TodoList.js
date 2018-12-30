import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import uuid from 'uuid/v4';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      isEdit: false,
      currEditing: null,
      currEditingText: '',
      completed: new Set([])
    };
    this.createTodo = this.createTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  createTodo(data) {
    let newTodo = { ...data, id: uuid() };
    this.setState(st => ({
      todos: [...st.todos, newTodo]
    }));
  }

  removeTodo(id) {
    this.setState(st => ({
      todos: st.todos.filter(todo => todo.id !== id)
    }));
  }

  showEditForm(id) {
    let textInd = this.state.todos.findIndex(todo => todo.id === id);
    let text = this.state.todos[textInd].task;
    this.setState(st => ({
      isEdit: true,
      currEditing: id,
      currEditingText: text
    }));
  }

  EditTodo(newText) {
    let todo = this.state.todos.filter(
      todo => todo.id === this.state.currEditing
    )[0];
    todo.task = newText;
    let todoInd = this.state.todos.findIndex(
      todo => todo.id === this.state.currEditing
    );
    this.setState(st => ({
      todos: [
        ...st.todos.slice(0, todoInd),
        todo,
        ...st.todos.slice(todoInd + 1)
      ],
      isEdit: false,
      currEditing: null
    }));
  }

  toggleCompleted(id) {
    let isCompleted = this.state.completed;
    isCompleted.has(id) ? isCompleted.delete(id) : isCompleted.add(id);
    this.setState(st => ({
      completed: isCompleted
    }));
  }

  render() {
    return (
      <div>
        <NewTodoForm createTodo={this.createTodo} />
        <ul>
          {this.state.todos.map(todo => {
            return (
              <li key={todo.id}>
                <Todo
                  className={
                    this.state.completed.has(todo.id) ? 'completed' : ''
                  }
                  id={todo.id}
                  todo={todo.task}
                  removeTodo={this.removeTodo}
                  showEditForm={this.showEditForm}
                  toggleCompleted={this.toggleCompleted}
                />
              </li>
            );
          })}
        </ul>
        <EditTodoForm
          className={this.state.isEdit ? 'shown' : 'hidden'}
          currEditing={this.state.currEditing}
          editTodo={this.editTodo}
          currEditingText={this.state.currEditingText}
        />
      </div>
    );
  }
}

export default TodoList;
