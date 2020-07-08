import React, { Component } from 'react';
import './Item.css';

export default class Item extends Component {

  handleCheck(e, id) {
    this.props.setSelection(id, e.target.checked);
  }

  render() {
    const { title, id } = this.props;

    return (
      <li className="todo-list__list-item__item">
        <h6>{title}</h6>
        <input type="checkbox" onChange={e => this.handleCheck(e, id)} />
      </li>
    )
  }
}

/*
  Props: data from parent, cannot be edited from it
  State: local data, can be edited in it
*/