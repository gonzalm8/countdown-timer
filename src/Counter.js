import React from 'react';
import Timer from './Timer';
import './App.css';

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      days: 0,
      hours:0,
      minutes:0,
      seconds:0,
      timerStarted:0
    }

    //make sure that 'this' get binded correctly to this class
    this.getTimer = this.getTimer.bind(this);
  }

  getTimer(e){
      if(this._inputDays.value !== "" || this._inputHours.value !== "" || this._inputMinutes.value !== "" || this._inputSeconds.value !== "") {
        this.setState({
          days: this._inputDays.value ? this._inputDays.value : 0,
          hours: this._inputHours.value ? this._inputHours.value : 0,
          minutes: this._inputMinutes.value ? this._inputMinutes.value : 0,
          seconds: this._inputSeconds.value ? this._inputSeconds.value : 0,
          timerStarted: 1
        });

      this._inputDays.value = "";
      this._inputHours.value = "";
      this._inputMinutes.value = "";
      this._inputSeconds.value = "";
    }

    //reset event so that next input isn't all wonky :/
    e.preventDefault();
  }


  render() {

    let inputTime = 
        <div>
            <form className="formWrapper" onSubmit={this.getTimer}>
                <div className="inputWrapper"><input className="userInput" type="text/number" ref={ (a) => this._inputDays = a } placeholder="00" /> <label>Days</label></div>
                <div className="inputWrapper"><input className="userInput" type = "text/number" ref={ (b) => this._inputHours = b } placeholder = "00" /> <label>Hours</label></div>
                <div className="inputWrapper"><input className="userInput" type = "text/number" ref={ (c) => this._inputMinutes = c } placeholder = "00" /> <label>Minutes</label></div>
                <div className="inputWrapper"><input className="userInput" type = "text/number" ref={ (d) => this._inputSeconds = d } placeholder = "00" /> <label>Seconds</label></div>
                <input className="submitInput" type="submit" value="Start Timer" />
            </form>            
        </div>;

      let headingMessage = this.state.timerStarted ? <h1>We're Launching Soon</h1> : <h1>Set Timer</h1>;

    return (
      <div className="wrapper">
        { headingMessage }
        <div className="timer">
          {
            this.state.days || this.state.hours || this.state.minutes || this.state.seconds ? <Timer days={parseInt(this.state.days)} hours={parseInt(this.state.hours)} minutes={parseInt(this.state.minutes)} seconds={parseInt(this.state.seconds)} /> : inputTime 
          }
        </div>
        <div className="footer">
          <a href="facebook.com" id="fb"><p className="hideText">Follow us on Facebook</p></a>
          <a href="instagram.com" id="insta"><p className="hideText">Follow us on Instagram</p></a>
          <a href="pintrest.com" id="pin"><p className="hideText">Follow us on Pintrest</p></a>
        </div>
      </div>
    );
  }
}

export default Counter;
