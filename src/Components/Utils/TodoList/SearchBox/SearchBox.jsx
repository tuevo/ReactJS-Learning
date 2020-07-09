import React, { Component, createRef } from 'react';
import './SearchBox.css';

export default class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.searchInputRef = createRef('xxx');
  }

  handleSearchInputChange(text) {
    this.props.filterTodos(text);
    console.log(this.searchInputRef.current.value);
  }

  render() {
    return (
      <div className="todo-list__search-box">
        <input
          type="text"
          placeholder="Search here..."
          onChange={e => this.handleSearchInputChange(e.target.value)}
          ref={this.searchInputRef}
        />
      </div>
    )
  }
}
