const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const Controls = require('Controls');
// component exists
// when countdownStatus is started, pause button is displayed
// when countdownStatus is paused, start button is displayed

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render pause button when started', () => {
      // render Controls and pass countdownStatus prop for testing
      const controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
      const $el = $(ReactDOM.findDOMNode(controls));
      const $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });

    it('should render start button if status equals paused', () => {
      const controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
      const $el = $(ReactDOM.findDOMNode(controls));
      const $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });
  });
});