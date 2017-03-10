const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  // a spy is a fn passed down from expect library as a fn prop, allows to assert
  // if fn is called and the arg it is called with
  it('should call onSetCountdown if valid seconds entered', () => {
    // create spy var
    const spy = expect.createSpy();
    // render component and inject spy
    const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    // create jQuery selector to get element and conv to jQuery obj
    let $el = $(ReactDOM.findDOMNode(countdownForm));
    // set ref value for seconds as str
    countdownForm.refs.seconds.value = '109';
    // simulate submit using jQuery to get form tag
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(109);
  });
});
