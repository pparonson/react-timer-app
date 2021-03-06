const React = require('react');

const Clock = require('Clock');
const CountdownForm = require('CountdownForm');
const Controls = require('Controls');

const Countdown = React.createClass({
  getInitialState() {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  // component lifecycle method
  componentDidUpdate(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({
            count: 0
          });
          // No break; fall thru
        case 'paused':
          // cancel setInterval fn call
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },

  // component lifecycle method, automatically called by react when component
  // gets removed from DOM
  componentWillUnmount() {
    // cancel setInterval fn call
    clearInterval(this.timer);
    this.timer = undefined;
  },

  startTimer() {
    // setInterval causes fn to call at set intervals
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      // native react fn that accepts an obj arg
      this.setState({
        // ternary operator to check if state is 0
        count: newCount >= 0 ? newCount : 0
      });

      if (newCount === 0) {
        this.setState({countdownStatus: 'stopped'})
      }

    }, 1000);
  },

  // fn to receive seconds passed from child and creates state
  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      // a state change calls componentDidUpdate()
      countdownStatus: 'started'
    });
  },

  // handles a new status passed in from Controls component
  handleStatusChange(newStatus) {
    this.setState({
      // updated the state
      countdownStatus: newStatus
    });
  },

  render() {
    // get current state with destructuring
    const {count, countdownStatus} = this.state;
    // fn to conditionally render Controls or CountdownForm
    const renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        // render Controls if not stoped
        return <Controls status={countdownStatus} onStatusChange={this.handleStatusChange}/>
      } else {
        // render CountdownForm and specify prop to be received by Countdown.jsx
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      }
    };
    return (
      <div>
        <h1 className="page-title">Countdown</h1>
        {/* count is received from current state passed with destructuring */}
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
