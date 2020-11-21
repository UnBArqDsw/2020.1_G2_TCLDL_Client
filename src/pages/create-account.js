import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as userAction } from '../store/reducer';

import useStyles from '../styles/components/CreateAccount.module';
import SignComponent from '../components/Sign';

function CreateAccount({ setUser }) {
  const styles = useStyles();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const router = useRouter();

  const handleInput = (setState) => (event) => {
    if (event.target.value && event.target.value !== '') {
      setState(event.target.value);
    }
  }


  const onSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3001/v0/signUp', { name, lastName, email, password, passwordConfirmation })
      console.log(response)
      if (response && response.data) {
        const response2 = await axios.post('http://localhost:3001/v0/login', { email, password })
        console.log(response2)
        if (response2.data) {
          setUser({ ...response.data, ...response2.data })
          router.push('/')
        }
        // setUser({ ...data, token: `Bearer ${token}` })
      }
    } catch (error) {
      console.log(error)
      toast(error)
  }
  }

  return (
    <div>
      <SignComponent>
        <form className={styles.form} noValidate autoComplete="off">
          <TextField className={styles.field} id="filled-basic" type="email" label="Email" onChange={handleInput(setEmail)} />
          <TextField className={styles.field} id="standard-basic" label="Name" onChange={handleInput(setName)} />
          <TextField className={styles.field} id="standard-basic" label="Last Name" onChange={handleInput(setLastName)} />
          <TextField type="password" className={styles.field} id="outlined-basic" label="Password" onChange={handleInput(setPassword)} />
          <TextField type="password" className={styles.field} id="outlined-basic" label="Confirm Password" onChange={handleInput(setPasswordConfirmation)} />

          <Button className={styles.button} variant="contained" onClick={onSubmit}>Create Account</Button>
        </form>
      </SignComponent>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(userAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);