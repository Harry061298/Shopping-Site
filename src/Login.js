
import React from 'react'
import './Login.css';
import { Link, useHistory} from 'react-router-dom';
import { useState } from 'react';
import { auth } from './firebase';


function Login() {
    const history = useHistory();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth 
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
               
            })
            .catch(error => alert(error.message))
    }

        // some fancy firebase loogin
   
    const register = e => {
        e.preventDefault();
        //some fancy firbase reg
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                // it creates new user id with email and pass 
                console.log(auth);

                if (auth) {
                    history.push('/')
                }
            }) 
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
            <img 
                className="login__logo"
                src="https://image.roku.com/bWFya2V0aW5n/Amazon.jpg" 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                </form>
                <form>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn}
                    className='login__signInButton'>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register}
                className='login__registerButton'>Create Your Account</button>
            </div>
        </div>
    )
}

export default Login
