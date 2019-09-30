//src/App.js
import React, { Component } from 'react';
import './stopwatch.css';

class Stopwatch extends Component{
  
  state = {
    status: true,
    runningTime: 0
  };

  handleClick = () => {
    var _this = this
    _this.setState(state => {
      if(state.status){
        clearInterval(this.incrementer);
      } else {
        this.incrementer = setInterval(function () {
          this.setState({
            runningTime:(this.state.runningTime + 1)
          });
        }, 1000)
      }
    return {status: !state.status}
    });
  };

  handleReset = () => {
    this.setState({runningTime: 0, running: false});
    clearInterval(this.incrementer);
  };

  getSeconds = () => {
    return ('0' + this.state.runningTime % 60).slice(-2);
  };
  
  getMinutes= () => {
    return ('0' + Math.floor(this.state.runningTime / 60)).slice(-2);
  };
  
  getHours= () => {
    return ('0' + Math.floor(this.getMinutes() / 60)).slice(-2);
  };

  render() {
    const { status } = this.state;
  
    return (
      <div>
        <div class="odometer"> {this.getHours()} : {this.getMinutes()} : {this.getSeconds()} </div>
        <div class="buttonFields">
          <button type="button" onClick={this.handleClick} > {status ? 'Start' : 'Stop'} </button>
          <button onClick={this.handleReset} > Reset </button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
