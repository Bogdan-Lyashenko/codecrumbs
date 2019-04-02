import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import { LoginForm } from './loginForm';
import { isValidLogin } from '../../api/login';
import { LoginEntity, createEmptyLogin } from '../../model';
import { NotificationComponent } from '../../common/components/notification';
import { CenteredView } from '../../layout';

interface Props extends RouteComponentProps<any> {
}

interface State {
  loginInfo: LoginEntity;
  showLoginFailedMsg: boolean;
}

export class Login extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      loginInfo: createEmptyLogin(),
      showLoginFailedMsg: false,
    };
  }

  private onLogin = () => {
    if (isValidLogin(this.state.loginInfo)) {
      this.props.history.push('/about');
    } else {
      this.setState({
        ...this.state,
        showLoginFailedMsg: true,
      });
    }
  }

  private onUpdateLoginField = (name, value) => {
    this.setState({
      loginInfo: {
        ...this.state.loginInfo,
        [name]: value,
      },
    });
  }

  public render() {
    return (
      <CenteredView>
        <NotificationComponent
          message="Invalid login or password, please type again"
          show={this.state.showLoginFailedMsg}
          onClose={() => this.setState({ showLoginFailedMsg: false })}
        />
        <Card>
          <CardHeader title="Login" />
          <CardContent>
            <LoginForm
              onLogin={this.onLogin}
              onUpdateLoginField={this.onUpdateLoginField}
              loginInfo={this.state.loginInfo}
            />
          </CardContent>
        </Card>
      </CenteredView>
    );
  }
}
