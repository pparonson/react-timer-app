const React = require('react');

const Controls = React.createClass({
  // this compoonent will be passed the status prop
  propTypes: {
    status: React.PropTypes.string.isRequired,
    // specifies fn to call when button is clicked
    onStatusChange: React.PropTypes.func.isRequired
  },
  // onClinkHandler fn
  onStatusChange(newStatus) {
    // currying pattern; returns a new fn with the newStatus passed as arg
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },

  render() {
    const {status} = this.props;

    const renderStartStopButton = () => {
      if (status === 'started') {
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>;
      } else {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>;
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
