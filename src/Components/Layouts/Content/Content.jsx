import React, { Component } from 'react';
import './Content.css';
import TodoList from '../../Utils/TodoList/TodoList';

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        <TodoList />
      </div>
    )
  }
}
