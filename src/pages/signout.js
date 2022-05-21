import React from 'react';
import { auth } from '../firebase/firebaseconfig';

function SignOut() {
    return (
        <button onClick={() => auth.signOut()} className='button'>Sign Out</button>
    )
}
export default SignOut;