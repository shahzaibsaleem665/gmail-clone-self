import React, { useState } from 'react'
import './LoginPage.css'
import { Button } from '@mui/material'
import { auth } from '../utilities/Firebase'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { login } from '../features/userSlice';
function LoginPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');



    const signIn = async () => {
        try {
          if (!Email || !Password) {
            alert('Please fill in all fields');
            return;
          }
    
         // Sign in with email and password
      const userCredential = await auth.signInWithEmailAndPassword(Email, Password);

      // Dispatch the user information to the Redux store
      dispatch(
        login({
          displayName: userCredential.user.displayName,
          email: userCredential.user.email,
          photoUrl: userCredential.user.photoURL,
        })
      );    
        } catch (error) {
          console.error('Error signing in: ', error);
          alert('Invalid credentials. Please try again.');
        }
      };
    


  return (
    <div className='loginPage'>
        <div className='loginPage__container'>
        <h2>Sign In</h2>
        <p>Enter credentials below</p>
        <form className='login__form'>
          <input type='email' required={true} value={Email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
          <input type='password' required={true} value={Password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
          <p>Forgot password? <a href='/forgetPassword'>Reset Password</a> </p>
        </form>
        <Button onClick={signIn}> Sign In</Button>
        </div>
    </div>
  )
}

export default LoginPage