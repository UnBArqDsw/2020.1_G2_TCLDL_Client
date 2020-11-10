import { fade, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
 form: {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 21
 },
 button: {
  margin: theme.spacing(1),
  backgroundColor: '#312e36',
  color: '#ffffff',
  padding: 10
 },
 helper: {
   marginLeft: 10
 }
}));
