import React from "react";


class CounterClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    componentDidMount() {
        // console.log("Counter is mounted!");
        this.runTimer();
    }

    componentDidUpdate() {
        // console.log("Counter is updated!");
    }

    runTimer() {
        const { time } = this.props;
        this.counterInterval = setInterval(this.timer, time);
    }

    timer = () => {
        const counterNew = this.state.counter + 1;
        this.setState({ ...this.state, counter: counterNew });
    };
    counterInterval = null;

    resetCounter() {
        this.setState({ counter: 0 });
    }

    componentWillUnmount() {
        // console.log("Counter has been destroyed!");
        clearInterval(this.counterInterval);
    }

    render() {
        const { counter } = this.state;

        return <div>
            <p>
                Counter: {this.state.counter}
            </p>
            <button onClick={() => { this.setState({ counter: 0 }) }}>Reset 1</button>
            <button onClick={() => this.resetCounter()}>Reset 2</button>
        </div>;
    }
}

export default CounterClass;
