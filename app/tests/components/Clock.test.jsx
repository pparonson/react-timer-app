// a standard set of react modules for proper BDD testing
const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const Clock = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });
});

describe('render', () => {
  it('should render clock to output', () => {
    // get clock component and pass totalSeconds as prop
    const clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
    // use jQuery selector to get element and conv to jQuery HTML obj
    const $el = $(ReactDOM.findDOMNode(clock));
    // get text value from .clock-text element (ie 01:02)
    const actualText = $el.find('.clock-text').text();

    expect(actualText).toBe('01:02');
  });
});

describe('formatSeconds', () => {
  it('should format seconds', () => {
    // TestUtils renders and returns component for test use
    const clock = TestUtils.renderIntoDocument(<Clock/>);
    const seconds = 615;
    const expected = '10:15';
    // get formatSeconds method from Clock component
    const actual = clock.formatSeconds(seconds);
    expect(actual).toBe(expected);
  });

  it('should format seconds when min/sec < 10', () => {
    const clock = TestUtils.renderIntoDocument(<Clock/>);
    const seconds = 61;
    const expected = '01:01';
    const actual = clock.formatSeconds(seconds);

    expect(actual).toBe(expected);
  });
});
