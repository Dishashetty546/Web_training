import React, { Component } from 'react';

class TimerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0
        };
    }

    componentDidMount() {
        console.log("Timer componentDidMount....");
        this.interval = setInterval(() => {
            this.setState({ seconds: this.state.seconds + 1 }); // Corrected this.setState call
        }, 1000);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount().....");
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <h2>Timer Component:</h2>
                <h3>Timer: {this.state.seconds} seconds</h3>
            </div>
        );
    }
}

export default TimerComponent;
