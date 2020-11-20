import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button }  from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '../DomainTable'
import Chart from '../Chart'
import styles from '../../styles/Domain.module.css';
import useDomainStyles from '../../styles/Domain.module';
import Tabs from '../Tabs'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0
  },
  headerOpen: {
    backgroundColor: '#312e36',
    color: '#ffffff' 
  },
  header: {
    backgroundColor: '#e0e0e1',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  button: {
    display: 'flex',
    alignSelf: 'flex-end',
    backgroundColor: '#312e36',
    color: '#ffffff',
    padding: 10,
  }
}));

export default function ControlledAccordions({ list }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(0);
  const [type, setType] = React.useState(0);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const tabs = [
    {
      label: 'Performance x Computing power',
      onSelect: () => setType(0)
    },
    {
      label: 'Performance x Year',
      onSelect: () => setType(1)
    }
  ]

  return (
    <div className={classes.root}>
      {list.map((value, index) => (
        <Accordion expanded={expanded === index} onChange={handleChange(index)}>
          <AccordionSummary className={expanded === index ? classes.headerOpen : classes.header} IconButtonProps={{ className: expanded === index ? classes.headerOpen : classes.header }} expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{value.label}</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <div className={styles.charts}>
            <div className={styles.menuTabs}>
              <Tabs tabs={tabs} sameLine />
            </div>
            <Chart data={value.data} label={value.chartLabel} isByYear={type} />
            <Table rows={value.data} />
            <Button className={classes.button}>Download Data</Button>
          </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
