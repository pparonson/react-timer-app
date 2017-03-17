const React = require('react');

const Controls = React.createClass({
  // this compoonent will be passed the status prop
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    timerStatus: React.PropTypes.string.isRequired,
    // specifies fn to call when button is clicked
    onStatusChange: React.PropTypes.func.isRequired
  },

  onStatusChange(newStatus) {
    // currying pattern; returns a new fn with the status passed as arg
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },

  render() {
    const {countdownStatus} = this.props;
    const {timerStatus} = this.props;

    const renderStartStopButton = () => {
      if (timerStatus === 'stopped') {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>;
      }
      if (countdownStatus === 'started' || timerStatus === 'started') {
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>;
      } else if (countdownStatus === 'paused' || timerStatus === 'paused') {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>;
      }
    };

    return (
      <div className="controls">
        {/* return value of renderStartStopButton */}
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
