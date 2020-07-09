import React, { Component, createRef } from 'react';
import './TodoForm.css';

export default class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true
    }

    this.titleInputRef = createRef('');
  }

  setFormDisplay(isDisplay) {
    let { hidden } = this.state;
    hidden = !isDisplay;
    this.setState({ hidden });
  }

  submitForm(e) {
    e.preventDefault();
    const title = this.titleInputRef.current.value;
    if (title) {
      this.props.submitTodo(title);
      this.setFormDisplay(false);
    }
    else alert('Please enter your task !!!');
  }

  render() {
    const { hidden } = this.state;

    return (
      <div className="todo-list__todo-form">
        <button
          className="todo-list__todo-form__btn-show"
          onClick={() => this.setFormDisplay(true)}
        >+</button>
        {!hidden && (
          <form
            className="todo-list__todo-form__form animate__animated animate__fadeIn"
            onSubmit={e => this.submitForm(e)}
          >
            <section className="todo-list__todo-form__form__header">
              <h4>What are you gonna do?</h4>
              <button type="button" onClick={() => this.setFormDisplay(false)}>X</button>
            </section>
            <section className="todo-list__todo-form__form__body">
              <input
                ref={this.titleInputRef}
                type="text"
                placeholder="Enter your task..."
              />
            </section>
            <section className="todo-list__todo-form__form__footer">
              <button type="submit">ADD</button>
            </section>
          </form>
        )}
      </div>
    )
  }
}
