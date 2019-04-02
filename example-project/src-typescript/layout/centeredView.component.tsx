import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import styles from './centeredView.styles';

interface Props extends WithStyles<typeof styles> {
}

const CenteredViewInner: React.StatelessComponent<Props> = (props) => (
  <div className={props.classes.container}>
    {props.children}
  </div>
);

export const CenteredView = withStyles(styles)(CenteredViewInner);
