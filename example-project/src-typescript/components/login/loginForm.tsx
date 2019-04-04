import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { LoginEntity } from '../../model';
import styles from './loginForm.styles';

interface Props extends WithStyles<typeof styles> {
  onLogin: () => void;
  onUpdateLoginField: (name: string, value: any) => void;
  loginInfo: LoginEntity;
}

const LoginFormInner: React.StatelessComponent<Props> = (props: Props) => {

  const onTextFieldChange = (fieldId) => (e) => {
    props.onUpdateLoginField(fieldId, e.target.value);
  }

  return (
    <div className={props.classes.container}>
      <TextField 
        label="name"
        margin="normal"
        value={props.loginInfo.login}
        onChange={onTextFieldChange('login')}
      />
      <TextField
        label="password"
        type="password"
        margin="normal"
        value={props.loginInfo.password}
        onChange={onTextFieldChange('password')}
      />
      <Button variant="contained" color="primary" onClick={props.onLogin}>
        Login
      </Button>
    </div>
  );
}

export const LoginForm = withStyles(styles)(LoginFormInner);
