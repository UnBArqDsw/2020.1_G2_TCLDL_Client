import React, { useState } from 'react'
import { useRouter } from 'next/router';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import useStyles from '../styles/components/CreateAccount.module';
import SignComponent from '../components/Sign'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as userAction } from '../store/reducer';
import Axios from 'axios';

const Home = ({ user, setUser }) => {
  const styles = useStyles();
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const router = useRouter()

  const handleLogin = () => {
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

    Axios.post('http://localhost:3001/v0/login', { email, password })
      .then(({ data: { token } }) => Axios.get('http://localhost:3001/v0/users', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(({ data }) => {
        setUser({
          email: data.email,
          name: [data.name, data.lastName].join('')
        })

        router.push('/')
      }))
  }

  return (
    <div>
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