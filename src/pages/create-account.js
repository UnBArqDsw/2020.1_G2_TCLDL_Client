import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/router';

import useStyles from '../styles/components/CreateAccount.module';
import SignComponent from '../components/Sign';
export default function Home() {
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


  const onSubmit = () => {
    axios.post('http://localhost:3001/v0/signUp', { name, lastName, email, password, passwordConfirmation })
      .then(() => router.push('/login'))
      .catch(error => {
        toast(error)
      })
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
