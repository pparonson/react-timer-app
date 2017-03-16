const React = require('react');

const Clock = require('Clock');

const Timer = React.createClass({
  getInitialState() {
    return {
      timerStatus: 'stopped'
    };
  },
  render() {
    const timerStatus = this.state;

    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock/>
      </div>
    );
  }
});

module.exports = Timer;
