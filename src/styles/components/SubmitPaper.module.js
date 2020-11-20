import { fade, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    padding: 59,
    display: 'flex',
    flexDirection: 'column',
  },
  flexButtons: {
    display: 'flex',
    flex: 0.7,
    margin: '10px',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  flexDate:{
    display: 'flex',
    flex: 0.3,
    margin: '10px', 
  },
  flexLinks: {
    display: 'flex',
    flex: 0.5,
    margin: '10px',
  },
  authorField: {
    minWidth: 500,
    marginTop: 10
  },
  nameflex: {
    display: 'flex',
    flex: 1,
    margin: '10px'
  },
  sameLine: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'strech',
  },
  boxOnRight: {
    marginLeft: 30
  },
  subsection:{
    marginTop: 50,
  },
  field:{
    margin: '10px',
  },
  selectField: {
    margin: '10px',
    minWidth: 200,
  },
  authorButtons: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10
  },
  buttons: {
    display: 'flex',
    marginTop: 20,
    justifyContent: 'flex-end',
    alignSelf: 'stretch'
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#312e36',
    color: '#ffffff',
    padding: 10,
    alignSelf: 'center'
  },
  cancelButton: {
    color: '#312e36',
    padding: 10
  },
  boxTitle: {
    display: 'flex', 
    marginTop: '3rem',
    marginBottom: '3rem',
  }
}));
