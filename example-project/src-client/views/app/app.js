import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { authActions, getAuth } from '../../auth';
import Header from '../components/header';
import RequireAuthRoute from '../components/require-auth-route';
import RequireUnauthRoute from '../components/require-unauth-route';
import SignInPage from '../pages/sign-in';
import TasksPage from '../pages/tasks';

//cc:layout#1;describe pages
const App = ({authenticated, signOut}) => (
  <div>
    <Header
      authenticated={authenticated}
      signOut={signOut}
    />

    <main>
      <RequireAuthRoute authenticated={authenticated} exact path="/" component={TasksPage}/>
      <RequireUnauthRoute authenticated={authenticated} path="/sign-in" component={SignInPage}/>
    </main>
  </div>
);

App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
};


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = getAuth;

const mapDispatchToProps = {
  signOut: authActions.signOut
};

//cc:here
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
