const React = require('react');

const Clock = require('Clock');
const Controls = require('Controls');
// const TimerForm = require('TimerForm');

const Timer = React.createClass({
  getInitialState() {
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },

  // component lifecycle method called after props or state is updated
  componentDidUpdate(prevProps, prevState) {
    // check if state change
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
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
    console.log('componentWillUnmount');
    // cancel setInterval fn call
    clearInterval(this.timer);
    this.timer = undefined;
  },

  startTimer() {
    // setInterval causes fn to call at set intervals
    this.timer = setInterval(() => {
      const newCount = this.state.count + 1;
      // navive react fn that accepts an obj arg
      this.setState({
        // ternary operator to check if state is 0
        count: newCount
      });

      if (newCount === 3600) {
        this.setState({
          timerStatus: 'stopped'
        });
      }

    }, 1000);
  },

  handleStatusChange(newStatus) {
    this.setState({
      timerStatus: newStatus
    });
  },

  render() {
    const {count, timerStatus} = this.state;
    console.log(timerStatus);

    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count}/>
        <Controls timerStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
});

module.exports = Timer;
