import React, { Component } from 'react';
import './TodoList.css';
import SearchBox from './SearchBox/SearchBox';
import Toolbar from './Toolbar/Toolbar';
import Item from './Item/Item';

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItems: []
    }
  }

  setItemSelection(id, isSelected) {
    let { selectedItems } = this.state;

    if (isSelected)
      selectedItems.push(id);
    else {
      selectedItems = selectedItems.filter(item => item !== id);
    }

    this.setState({ selectedItems });
  }

  render() {
    console.log(process.env.REACT_APP_API_URL);

    const { selectedItems } = this.state;

    let todos = [
      { id: 1, title: 'Do something 1', done: false },
      { id: 2, title: 'Do something 2', done: false },
      { id: 3, title: 'Do something 3', done: true },
      { id: 4, title: 'Do something 4', done: false },
    ];

    todos = todos.filter(item => selectedItems.indexOf(item.id) < 0);

    return (
      <div className="todo-list">
        <h1 className="todo-list__title --main">TODO LIST</h1>
        <h6 className="todo-list__title --sub">Notice your work</h6>

        <SearchBox />
        <Toolbar />

        <ul className="todo-list__list-item">
          {todos.map(item => {
            return <Item
              key={item.id}
              id={item.id}
              title={item.title}
              checked={item.done}
              setSelection={(id, isSelected) => this.setItemSelection(id, isSelected)}
            />
          })}
        </ul>

      </div>
    )
  }
}
