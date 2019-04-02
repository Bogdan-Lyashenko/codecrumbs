import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import styles from './appView.styles';
import { Header } from '../components';

interface Props extends WithStyles<typeof styles> {
}

const AppViewInner: React.StatelessComponent<Props> = (props) => (
  <div className={props.classes.container}>
    <Header/>
    {props.children}
  </div>
);

export const AppView = withStyles(styles)(AppViewInner);
