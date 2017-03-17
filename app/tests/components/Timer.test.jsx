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

  describe('handleSetTimer', () => {
    // assert that handleSetTimer status and state are update and count increments
    it('should set state to "started" and then increment count', (done) => {
      const timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleSetTimer();

      expect(timer.state.count).toBe(0);
      expect(timer.state.timerStatus).toBe('started');

      // async action
      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        done();
      }, 1001);
    });

    // change newCount === 3600 before uncomment this test
    // it('should set state to "stopped" when timer reaches limit', (done) => {
    //   const timer = TestUtils.renderIntoDocument(<Timer/>);
    //   timer.handleSetTimer();
    //
    //   setTimeout(() => {
    //     expect(timer.state.timerStatus).toBe('stopped');
    //     done();
    //   }, 3001);
    // });
  });
});
