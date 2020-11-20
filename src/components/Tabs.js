import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  tabsWrapper: {
    backgroundColor: theme.palette.background.paper,
    color: '#000000',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    
  },
  tabLabel: {
    fontSize: '18px',
    width: 'auto',
    padding: '5px 20px',
    maxWidth: 210,
  },
  tabLabelSameLine: {
    fontSize: '18px',
    width: 'auto',
    padding: '5px 20px',
    maxWidth: 510,
  }

}));

export default function TabsWrappedLabel({ tabs, sameLine }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    tabs[newValue].onSelect()
  };

  console.log('sameLine', sameLine)

  return (
    <div className={classes.tabsWrapper}>
      <Tabs value={value} scrollButtons="on" variant="scrollable" wrapped onChange={handleChange}>
        {tabs.map((value, index) => (
          <Tab
            key={index}
            className={sameLine ? classes.tabLabelSameLine : classes.tabLabel}
            value={index}
            label={value.label}
            wrapped
          />
        ))}
      </Tabs>
    </div>
  );
}
