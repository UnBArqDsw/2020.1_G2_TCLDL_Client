import Head from 'next/head';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import useStyles from '../styles/CreateAccount.module';

import AppBar from '../components/AppBar'
import SignComponent from '../components/Sign'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as userAction } from '../store/reducer';

const Home = () => {
  const styles = useStyles();

  return (
    <div>
      
      <AppBar />
      <SignComponent>
        <form className={styles.form} noValidate autoComplete="off">
          <TextField className={styles.field} id="filled-basic" label="Email" variant="outlined" />
          <TextField className={styles.field} id="outlined-basic" label="Password" variant="outlined" />

          <Button className={styles.button} variant="contained" onClick={() => mapDispatchToProps({type: "LOGADO" })} >sign in</Button>
        </form>
      </SignComponent>
    </div>

  );
}
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(userAction, dispatch);

export default connect(null, mapDispatchToProps)(Home);