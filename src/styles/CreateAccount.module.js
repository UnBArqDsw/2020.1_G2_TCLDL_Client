import { fade, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
 form: {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 20
 },
 button: {
  margin: theme.spacing(1),
  backgroundColor: '#312e36',
  color: '#ffffff',
  padding: 10
 }, content: {
    flex: 1,
    margin: 20
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
  }
}));
