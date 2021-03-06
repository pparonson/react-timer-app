const React = require('react');

const CountdownForm = React.createClass({
  onSubmit(e) {
    // prevent full browser refresh
    e.preventDefault();

    const strSeconds = this.refs.seconds.value;

    // jQuery selector to display input
    // console.log(`input: ${$('input').length}`);
    console.log('input: ', $('input').length);
    // validation with regEx: 0 - 9
    if (strSeconds.match(/^[0-9]*$/)) {
      // clear the field to empty str
      this.refs.seconds.value = '';
      // call parent fn Countdown.jsx and pass the seconds as a prop
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },
  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <div>
            <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          </div>
          <div>
            <button className="button expanded">Start</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
