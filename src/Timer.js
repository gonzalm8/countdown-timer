import React from 'react';
import './App.css';

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            days:  this.props.days,
            hours: this.props.hours,
            minutes: this.props.minutes,
            seconds: this.props.seconds
        }

    this.startTimer = this.startTimer.bind(this);
    }

    //divfecycle methods: mounting ensures the timer is set and rendered to the DOM on the first render
    //                   unmounting ensures the timer is removed from DOM and FREES UP SPACE once it is no longer being used/removed
    componentDidMount(){
        this.timerID = setInterval(
        () => this.startTimer()    
        ,1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    startTimer(){
        let currDays = this.state.days === 0 ? this.state.days : 0;
        let currHours = this.state.hours; 
        let currMinutes = this.state.minutes;
        let currSeconds = this.state.seconds;

        if(currSeconds !== 0){
            currSeconds--;
            this.setState({
                seconds: currSeconds
            });
        }else{
            if(currMinutes !== 0){
                currMinutes--;
                this.setState({
                    minutes: currMinutes,
                    seconds: 60
                })
            }
            else if(currHours !== 0){
                currHours--;
                this.setState({
                    hours: currHours,
                    minutes: 60,
                    second: 60
                })
            }
            else if(currDays !== 0){
                currDays--;
                this.setState({
                    days: currDays,
                    hours: 24,
                    minutes: 60,
                    seconds: 60
                })
            }
            else{
                this.setState({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                });
                this.componentWillUnmount();
            }
        }
        

        
    }

    render(){
        return(
            <div className="listWrapper">
                <div className="timeInterval"><h2 id="day">{ this.state.days }</h2><p>Days</p></div>
                <div className="timeInterval"><h2 id="hour">{ this.state.hours }</h2><p>Hours</p></div>
                <div className="timeInterval"><h2 id="min">{ this.state.minutes }</h2><p>Minutes</p></div>
                <div className="timeInterval"><h2 id="sec">{ this.state.seconds }</h2><p>Seconds</p></div>
            </div>
        );
    }
}

export default Timer;