const React = require('react');

const Clock = require('Clock');
const CountdownForm = require('CountdownForm');

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
      }
    }
  },
  startTimer() {
    // setInterval causes fn to call at set intervals
    setInterval(() => {
      const newCount = this.state.count - 1;
      // navive react fn that accepts an obj arg
      this.setState({
        // ternary operator to check if state is 0
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  },
  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      // a state change calls componentDidUpdate()
      countdownStatus: 'started'
    });
  },
  render() {
    const {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown;
