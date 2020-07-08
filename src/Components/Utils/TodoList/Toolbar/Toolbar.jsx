import React, { Component } from 'react';
import './Toolbar.css';

export default class Toolbar extends Component {
  render() {
    return (
      <ul className="todo-list__toolbar">
        <li><button>DONE</button></li>
        <li><button>EDIT</button></li>
        <li><button>REMOVE</button></li>
      </ul>
    )
  }
}
