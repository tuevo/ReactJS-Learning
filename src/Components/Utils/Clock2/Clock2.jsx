import React, { Component } from 'react';

let now = new Date();
let timeString = `${now.getHours() >= 10 ? now.getHours() : `0${now.getHours()}`}:${now.getMinutes() >= 10 ? now.getMinutes() : `0${now.getMinutes()}`}:${now.getSeconds() >= 10 ? now.getSeconds() : `0${now.getSeconds()}`}`;
const themes = [
  { bg: 'white', color: 'rgba(0,0,0,0.7)' },  //light
  { bg: 'rgba(0,0,0,0.7)', color: 'lime' }    //dark
];

export default class Clock2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeString,
      themeIndex: 0
    }
  }

  componentDidMount() {
    this.clockInterval = setInterval(() => {
      now = new Date();
      timeString = `${now.getHours() >= 10 ? now.getHours() : `0${now.getHours()}`}:${now.getMinutes() >= 10 ? now.getMinutes() : `0${now.getMinutes()}`}:${now.getSeconds() >= 10 ? now.getSeconds() : `0${now.getSeconds()}`}`;
      this.setState({ timeString });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  handleChangeMode() {
    const { themeIndex } = this.state;
    const newThemeIndex = themeIndex === 0 ? 1 : 0;
    this.setState({ themeIndex: newThemeIndex });
  }

  // componentDidUpdate() {
  //   console.log('UPDATE !!!!');
  // }

  render() {
    const { timeString, themeIndex } = this.state;
    const selectedTheme = themes[themeIndex];
    const clockStyle = { backgroundColor: selectedTheme.bg };
    const timeStringStyle = { color: selectedTheme.color };

    return (
      <div className="clock" style={clockStyle}>
        <h1 className="clock__time" style={timeStringStyle}>{timeString}</h1>
        <button
          className="clock__btn"
          onClick={() => this.handleChangeMode()}
        >
          {themeIndex === 0 ? 'Dark' : 'Light'}
        </button>
      </div>
    )
  }
}
