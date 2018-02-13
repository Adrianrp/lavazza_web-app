import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import InjectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/app';
import Dashboard from './components/barista/dashboard';
import MainAppContainer from './components/main_app_container';
import RegisterForm from './components/register_form';
import FbLogin from './components/fb_login';
import Prized from './components/prized';
import Betingelser from './components/betingelser';
import RedirectUser from './components/redirect_user';

const userIsLoggedIn = (nextState, replaceState, cb) => {
  const userFbId = Meteor.userId();
  if (userFbId === null) {
    console.log('Got user');
    replaceState({
      pathname: '/login'
    });
  }
  cb();
};
const checkUserAgent = (nextState, replaceState, cb) => {
  console.log('Got user checkUserAgent', Meteor.userId());
  if (Meteor.userId()) {
    replaceState({
      pathname: '/'
    });
  }
  cb();
};
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={MainAppContainer} />
      <Route path="redirect" component={RedirectUser}/>
      <Route path="video_vote" component={MainAppContainer} />
      <Route path="register" component={RegisterForm} />
      {/*<Route path="login" component={FbLogin} onEnter={checkUserAgent}/>*/}
      <Route path="barista" component={Dashboard} onEnter={userIsLoggedIn}/>
      <Route path="prized" component={Prized} />
      <Route path="betingelser" component={Betingelser}/>
      {/*<Route path="_oauth/facebook?close" component={MainAppContainer} onEnter={checkUserAgent}/>*/}
      <Route path="*" component={MainAppContainer}/>
    </Route>
  </Router>
);

Meteor.startup(() => {
  InjectTapEventPlugin();
  ReactDOM.render(routes, document.querySelector('.wrap'));
});

//https://lavazzamaestrodetalje.dk/_oauth/facebook?close   http://localhost:3000/_oauth/facebook?close