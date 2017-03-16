const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  // assert that handleSetTimer status and state are update and count increments



  // assert that handleSetCountdown status and state are updated and count decrements
  describe('handleSetCountdown', () => {
    // done arg tells mocha to wait until done is called for async actions
    it('should set state to "started" and then countdown', (done) => {
      // render Countdown component
      const countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');
      // async
      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });
});
