import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authActions } from '../../../auth';
import Button from '../../../views/components/button';

import './sign-in-page.css';

// test for bug in react syntax highlighting
const WrapperComponent = ({children}) => <div className="g-row sign-in">{children}</div>

const SignInPage = ({signInWithGithub, signInWithGoogle, signInWithTwitter}) => {
  return (
    <WrapperComponent>
      <div className="g-col">
        <h1 className="sign-in__heading">Sign in</h1>
        <Button className="sign-in__button" onClick={signInWithGithub}>GitHub</Button>
        <Button className="sign-in__button" onClick={signInWithGoogle}>Google</Button>
        <Button className="sign-in__button" onClick={signInWithTwitter}>Twitter</Button>
      </div>
    </WrapperComponent>
  );
};

SignInPage.propTypes = {
  signInWithGithub: PropTypes.func.isRequired,
  signInWithGoogle: PropTypes.func.isRequired,
  signInWithTwitter: PropTypes.func.isRequired
};


//=====================================
//  CONNECT
//-------------------------------------

const mapDispatchToProps = {
  signInWithGithub: authActions.signInWithGithub, //cc:signin#0;dispatch action;start signin with github
  signInWithGoogle: authActions.signInWithGoogle,
  signInWithTwitter: authActions.signInWithTwitter
};
//cc:signin#7;test
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(SignInPage)
);
