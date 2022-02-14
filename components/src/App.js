import React from 'react';
import './App.css';
import GreetingsClass from './components/class/GreetingsClass';
import CounterClass from './components/class/CounterClass';
import GreetingsFunction from './components/function/GreetingsFunction';
import CounterFunction from './components/function/CounterFunction';
import StudentList from './components/function/StudentList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showCounter: true
    }
  }

  toggleCounter() {
    this.setState({ ...this.state, showCounter: !this.state.showCounter });
  }

  render() {
    const { showCounter } = this.state;

    return <div className="App">

      {/* <GreetingsClass name="Emrah"></GreetingsClass>
      {showCounter && <CounterClass time={1000} />} */}


      <GreetingsFunction />
      {showCounter && <CounterFunction time={1000} />}

      <button onClick={() => this.toggleCounter()}>
        {showCounter ? "Hide" : "Show"} Counter
      </button>
      <StudentList />
    </div>
  }
}

export default App;
