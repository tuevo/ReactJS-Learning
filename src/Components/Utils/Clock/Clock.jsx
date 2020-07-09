import React, { Component } from 'react';
import './Clock.css';

let now = new Date();
let timeNow = `${now.getHours() >= 10 ? now.getHours() : `0${now.getHours()}`}:${now.getMinutes() >= 10 ? now.getMinutes() : `0${now.getMinutes()}`}:${now.getSeconds() >= 10 ? now.getSeconds() : `0${now.getSeconds()}`}`;

const clockThemes = [
  { bg: 'white', color: 'rgba(0,0,0,0.7)' },
  { bg: 'rgba(0,0,0,0.7)', color: 'lime' }
]

export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeString: timeNow,
      mode: 0
    }
  }

  componentDidMount() {
    console.log("Component did mount");

    this.clockInterval = setInterval(() => {
      now = new Date();
      timeNow = `${now.getHours() >= 10 ? now.getHours() : `0${now.getHours()}`}:${now.getMinutes() >= 10 ? now.getMinutes() : `0${now.getMinutes()}`}:${now.getSeconds() >= 10 ? now.getSeconds() : `0${now.getSeconds()}`}`;
      this.setState({ timeString: timeNow });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  handleClickChangeMode() {
    const { mode } = this.state;
    const newMode = mode === 0 ? 1 : 0;
    this.setState({ mode: newMode });
  }

  render() {
    const { timeString, mode } = this.state;
    const theme = clockThemes[mode];
    const clockStyle = { backgroundColor: theme.bg };
    const clockTimeStyle = { color: theme.color };

    return (
      <div className="clock" style={clockStyle}>
        <h1 className="clock__time" style={clockTimeStyle}>{timeString}</h1>
        <button
          className="clock__btn"
          onClick={() => this.handleClickChangeMode()}
        >
          {mode === 0 ? 'Dark' : 'Light'}
        </button>
      </div>
    )
  }
}
