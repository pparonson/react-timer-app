const React = require('react');

const Clock = React.createClass({
  // specify default props if not passed down from parent
  getDefaultProps() {
    totalSeconds: 0
  },
  // define propTypes
  propTypes: {
    totalSeconds: React.PropTypes.number
  },

  formatSeconds(totalSeconds) {
    // separate totalSeconds into proper min:sec format
    // let permits reassignment
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    if (seconds < 10) {
      // prepend a 0 to sec
      seconds = `0${seconds}`;
    }

    if (minutes < 10) {
      // prepend a 0 to min
      minutes = `0${minutes}`;
    }
    return `${minutes}:${seconds}`;
  },

  render() {
    // get props using destructuring
    const {totalSeconds} = this.props;
    return (
      <div className="clock" ref="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
});

module.exports = Clock;
