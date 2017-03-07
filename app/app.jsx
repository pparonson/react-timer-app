const React = require('react');
const ReactDOM = require('react-dom');
// react router library used to configure url routes for web app
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

const Main = require('Main');
const Timer = require('Timer');
const Countdown = require('Countdown');

$(document).foundation();
// loaders
require('style!css!foundation-sites/dist/css/foundation.min.css');
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown}></Route>
      <IndexRoute component={Timer}></IndexRoute>
    </Route>
  </Router>,
  document.getElementById('app')
);
