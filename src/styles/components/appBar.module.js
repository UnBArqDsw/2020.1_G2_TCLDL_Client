import { fade, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none'
  },
  mainIcon: {
    width: 70,
    height: 'auto'
  },
  appBar: {
    background: '#312e36'
  },
  signIn: {
    color: '#ffffff',
    marginRight: '30px',
    '&:hover': { filter: `opacity(0.7)` }
  },
  signUp: {
    backgroundColor: '#ffffff',
    marginRight: '9px'
  },
  aboutIcon: {
    color: '#ffffff',
    marginLeft: '30px',
    '&:hover': { filter: `opacity(0.7)` }
  },
  domainsIcon: {
    color: '#ffffff',
    marginLeft: '30px',
    '&:hover': { filter: `opacity(0.7)` }
  },
  submitPaperIcon: {
    color: '#ffffff',
    marginLeft: '30px',
    backgroundColor: '#312e36',
    '&:hover': { filter: `opacity(0.7)` }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));