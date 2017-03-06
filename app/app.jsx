const React = require('react');
const ReactDOM = require('react-dom');

const Main = require('Main');


// react router library used to configure url routes for web app
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
$(document).foundation();
// loaders
require('style!css!foundation-sites/dist/css/foundation.min.css');
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

    </Route>
  </Router>,
  document.getElementById('app')
);
