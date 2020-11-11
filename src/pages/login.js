import React, { useState } from 'react'
import Head from 'next/head';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import useStyles from '../styles/components/CreateAccount.module';

import AppBar from '../components/AppBar'
import SignComponent from '../components/Sign'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as userAction } from '../store/reducer';

const Home = ({ user, setUser }) => {
  const styles = useStyles();
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const handleLogin = () => {
    console.log(email, password)
    if (!email) {
      setEmailError(true)
    } else {
      setEmailError(false)
    }
    if (!password) {
      setPasswordError(true)
    } else {
      setPasswordError(false)
    }

    if (!email || !password) {
      return
    }

    setUser({
      email,
      name: 'José Manso'
    })
  }

  return (
    <div>  
      <AppBar />
      <SignComponent>
        <form className={styles.form}>
          <TextField onChange={event => setEmail(event.target.value)} className={styles.field} id="filled-basic" label="Email" />
          {emailError && <FormHelperText className={styles.helper} error>Email is required </FormHelperText>}
          <TextField type="password" onChange={event => setPassword(event.target.value)} className={styles.field} id="outlined-basic" label="Password" />
          {passwordError && <FormHelperText className={styles.helper} error>Password is required</FormHelperText>}
          <Button onClick={handleLogin} className={styles.button} variant="contained">sign in</Button>
        </form>
      </SignComponent>
    </div>

  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(userAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);