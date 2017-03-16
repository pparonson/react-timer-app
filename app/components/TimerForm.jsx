const React = require('react');

const TimerForm = React.createClass({
  onClick(e) {
    // prevent full browser refresh
    e.preventDefault();

    // call parent fn Timer.jsx
    this.props.onSetTimer();
  },

  render() {
    return (
      <div>
        <button className="button expanded" onClick={this.onClick}>Start</button>
      </div>
    );
  }
});

module.exports = TimerForm;
