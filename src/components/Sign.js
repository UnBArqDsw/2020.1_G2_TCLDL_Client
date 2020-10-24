import React from 'react';

import useStyles from '../styles/components/Sign.module'
import Link from 'next/link'

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

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
        <Paper className={classes.box}>
          <img src="/mainIconBlack.png" className={classes.icon} alt="logo" />
          {children}
        </Paper>
      </div>
    </div>
  );
}
