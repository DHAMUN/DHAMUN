import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { HomeApp } from 'containers/HomeApp';
import { DashboardApp } from 'containers/DashboardApp';

import { Home } from 'containers/Home';
import { List } from 'containers/List';
import { Login } from 'containers/Login';
import { SignUp } from 'containers/SignUp';

import { DashHome } from 'containers/DashHome';

import { requireAuthentication } from 'components/AuthenticatedComponent';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/home"/>

    <Route path="/home" component={HomeApp}>
      <IndexRoute component={Home}/>
      <Route path="/home/list" component={List}/>
      <Route path="/home/signup" component={SignUp}/>
      <Route path="/home/login" component={Login}/>

    </Route>

    <Route path="/dashboard" component={requireAuthentication(DashboardApp)} >
      <IndexRoute component={DashHome}/>
    </Route>

    <Route status={404} path="*" component={HomeApp} />
  </Route>

);
