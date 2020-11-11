import { fade, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: '10%',
    fontFamily: 'Roboto Mono'
  },
  content: {
    flex: 1,
    margin: 20
  },
  flex: {
    display: 'flex',
    flex: 1,
    margin: 10
  },
  sameLine: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'strech',
  },
  boxOnRight: {
    marginLeft: 30
  },
  box: {
    padding: 10,
    paddingLeft: 100,
    paddingRight: 100,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
    },
  },
  field:{
    margin: 10,
  },
  selectField: {
    margin: 10,
    minWidth: 200,
  },
  section: {
    marginTop: 20
  },
  icon: {
    alignSelf: 'center',
    width: 120,
    height: 'auto'
  },
  buttons: {
    display: 'flex',
    marginTop: 20,
    justifyContent: 'flex-end',
    alignSelf: 'stretch'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20
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
  title: {
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 40,
    textAlign: 'left',
    color: '#121212',
  },
  gridBox: {
    padding: 0,
  },
  boxTitle: {
    display: 'flex', 
    marginTop: '3rem',
    marginBottom: '3rem',
  },
  text: {
    margin: 50,
    fontSize: 18,
    fontWeight: 300,
    lineHeight: 24,
    textAlign: 'center',
  }
}));
