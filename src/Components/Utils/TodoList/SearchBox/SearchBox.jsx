import React, { Component } from 'react';
import './SearchBox.css';

export default class SearchBox extends Component {
  render() {
    return (
      <div className="todo-list__search-box">
        <input type="text" placeholder="Search here..." />
      </div>
    )
  }
}
