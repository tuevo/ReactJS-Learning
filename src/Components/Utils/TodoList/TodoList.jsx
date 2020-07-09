import React, { Component } from 'react';
import './TodoList.css';
import SearchBox from './SearchBox/SearchBox';
import Toolbar from './Toolbar/Toolbar';
import Item from './Item/Item';
import TodoForm from './TodoForm/TodoForm';

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    const data = [
      { id: 1, title: 'Sleep', done: false },
      { id: 2, title: 'Code', done: false },
      { id: 3, title: 'Eat', done: true },
      { id: 4, title: 'Sport', done: false },
    ];

    this.state = {
      selectedItems: [],
      todos: [...data],
      filteredTodos: [...data]
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

  filterTodos(term) {
    let { filteredTodos, todos } = this.state;
    filteredTodos = !term ? [...todos] : todos.filter(item => {
      const lowerTitle = item.title.toLowerCase();
      return lowerTitle.includes(term.toLowerCase());
    });
    this.setState({ filteredTodos });
  }

  addTodo(title) {
    let { todos } = this.state;
    const newTodo = {
      id: todos.length + 1,
      title,
      done: false
    };

    todos.push(newTodo);
    this.setState({ todos });
    this.filterTodos('');
  }

  render() {
    let { selectedItems, filteredTodos } = this.state;
    filteredTodos = filteredTodos.filter(item => selectedItems.indexOf(item.id) < 0);

    return (
      <div className="todo-list">
        <h1 className="todo-list__title todo-list__title--main">TODO LIST</h1>
        <h6 className="todo-list__title todo-list__title--sub">Manage your task</h6>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <SearchBox
            filterTodos={term => this.filterTodos(term)}
          />
          <TodoForm
            submitTodo={title => this.addTodo(title)}
          />
        </div>
        <Toolbar />

        <ul className="todo-list__list-item">
          {filteredTodos.map(item => {
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
