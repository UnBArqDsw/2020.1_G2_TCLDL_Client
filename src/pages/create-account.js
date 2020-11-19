import Head from 'next/head';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import useStyles from '../styles/components/CreateAccount.module';

import AppBar from '../components/AppBar'
import SignComponent from '../components/Sign'
export default function Home() {
  const styles = useStyles();

  return (  
    <div>
      <AppBar />
      <SignComponent>
        <form className={styles.form} noValidate autoComplete="off">
          <TextField className={styles.field} id="standard-basic" label="Username" />
          <TextField className={styles.field} id="filled-basic" label="Email" />
          <TextField className={styles.field} id="outlined-basic" label="Password" />
          <TextField className={styles.field} id="outlined-basic" label="Confirm Password" />

          <Button className={styles.button} variant="contained">Create Account</Button>
        </form>
      </SignComponent>
    </div>
  );
}
