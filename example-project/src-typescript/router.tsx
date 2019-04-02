import * as React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { App } from './app';
import { About, MembersPage, MemberPageContainer, Login } from './components';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <Router>
      <div className="container-fluid">
        <Route component={App} />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/members" component={MembersPage} />
          <Route exact path="/member" component={MemberPageContainer} />
          <Route path="/member/:id" component={MemberPageContainer} />
        </Switch>
      </div>
    </Router>
  );
}
