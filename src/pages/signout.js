import React from 'react';
import { MenuItem } from 'react-pro-sidebar';
import { auth } from '../firebase/firebaseconfig';
import { FaIdCardAlt } from 'react-icons/fa';
function SignOut() {
	return (
		<div>
			<MenuItem icon={<FaIdCardAlt />} onClick={() => auth.signOut()} className='button'></MenuItem>
			<div style={{ fontSize: 10, textAlign: 'center' }}>Sign Out</div>
		</div>
	);
}
export default SignOut;
