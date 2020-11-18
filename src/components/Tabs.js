import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    color: '#000000',
    boxShadow: 0,
    '& .MuiPaper-elevation4': {
      boxShadow: 0
    }
  },
}));

export default function TabsWrappedLabel({ tabs }) {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    tabs[newValue].onSelect()
  };

  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
        {tabs.map((value, index) => (
          <Tab
            value={index}
            label={value.label}
            wrapped
            {...a11yProps('one')}
          />
        ))}
      </Tabs>
    </div>
  );
}
