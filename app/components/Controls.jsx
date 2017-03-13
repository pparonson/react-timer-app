const React = require('react');

const Controls = React.createClass({
  // this compoonent will be passed the status prop
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired
  },

  render() {
    const {countdownStatus} = this.props;
    const renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="button secondary">Pause</button>;
      } else if (countdownStatus === 'paused') {
        return <button className="button primary">Start</button>;
      }
    };
    return (
      <div className="controls">
        {/* return value of renderStartStopButton */}
        {renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
