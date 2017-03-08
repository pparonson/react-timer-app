const React = require('react');

const Clock = require('Clock');

const Timer = React.createClass({
  render() {
    return (
      <div>
        <p>Timer component</p>
        <Clock/>
      </div>
    );
  }
});

module.exports = Timer;
