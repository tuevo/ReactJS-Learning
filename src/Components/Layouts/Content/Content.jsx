import React, { Component } from 'react';
import './Content.css';
import TodoList from '../../Utils/TodoList/TodoList';
import Clock from '../../Utils/Clock/Clock';
// import Clock2 from '../../Utils/Clock2/Clock2';
import { API } from '../../../Constant/api.constant';
import { HttpRequestService } from '../../../Services/http-request.service';

export default class Content extends Component {
  // componentDidMount() {
  //   this.login();
  // }

  login = async () => {
    const res = await HttpRequestService.post(API.USER.LOGIN, { username: 'tuevo', password: 'qscqsc' }, false);
    if (res.status !== 200)
      return;

    const { token } = res.data.meta;
    localStorage.setItem('token', token);
  }

  render() {
    return (
      <div className="content">
        <TodoList />
        <Clock />
        {/* <Clock2 /> */}
      </div>
    )
  }
}
