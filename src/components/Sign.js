import React from 'react';

import useStyles from '../styles/components/Sign.module'
import Link from 'next/link'

import Paper from '@material-ui/core/Paper';

export default function SignComponent({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1>The Computional Limits of Deep Learning</h1>
        <p>You want to understand the behavior of Deep Learning models in terms of scalability or other Deep Learning issues?  The TCLDL can help you.</p>
        <p>TCLDL is a website that reinforces the role played by computing power in terms of models' performance improvements.</p>
      </div>
      <div className={classes.content}>
        <Paper elevation={3} className={classes.box}>
          <img src="/mainIconBlack.png" className={classes.icon} alt="logo" />
          {children}
        </Paper>
      </div>
    </div>
  );
}
