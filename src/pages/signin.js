import React from 'react';
import { SignInWithGoogle } from '../firebase/firebaseconfig.js';
import googlesvg from '../assets/Google_button.svg';
import './signin.scss';
const SignIn = () => {
	// const signinwithgoogle = () => {
	//     SignInWithGoogle();
	// }
	return (
		<div className='main-signin_div'>
			<button onClick={SignInWithGoogle} className='google'>
				sign with google
			</button>
			<img src={googlesvg} alt='svg_img' />
		</div>
	);
};
export default SignIn;
