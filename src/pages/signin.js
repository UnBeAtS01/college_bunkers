
import React from 'react';
import { SignInWithGoogle } from '../firebase/firebaseconfig.js';

const SignIn = () => {
    // const signinwithgoogle = () => {
    //     SignInWithGoogle();
    // }
    return (
        <div className='main-page'>
            <button onClick={SignInWithGoogle} className='google'>Sign in With Google</button>

        </div>
    )
}
export default SignIn;