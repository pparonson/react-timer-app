const React = require('react');
const ReactDOM = require('react-dom');
// react router library used to configure url routes for web app
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

// loading components
const Main = require('Main');
const Timer = require('Timer');
const Countdown = require('Countdown');


// load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

require('style!css!sass!applicationStyles')

// component routing
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown}></Route>
      {/* default route IndexRoute, renders if 0 route paths */}
      <IndexRoute component={Timer}></IndexRoute>
    </Route>
  </Router>,
  document.getElementById('app')
);
