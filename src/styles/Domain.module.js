import { fade, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#312e36',
    color: '#ffffff',
    padding: 10,
    alignSelf: 'center'
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  aboutIcon: {
    '&:hover': {
      filter: `opacity(0.7)`,
      backgroundColor: '#ffffff'
    },
    marginBottom: 2,
    color: 'black',
    paddingLeft: 0
  },
}));
