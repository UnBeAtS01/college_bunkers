import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter } from 'react-pro-sidebar';
import SignOut from '../../pages/signout.js';
import { FaGem, FaHeart } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { auth } from '../../firebase/firebaseconfig.js';
import './sidenav.scss';
const Navbar = ({ profile }) => {
	const [name, setName] = useState('');
	const [pic, setPic] = useState('');
	useEffect(() => {
		if (profile) {
			const { uid, photoURL, displayName } = auth.currentUser;
			//console.log(auth.currentUser);
			setName(displayName);
			//console.log(displayName);
			setPic(photoURL);
		}
	}, [profile]);
	return (
		<div className='sidenav'>
			<ProSidebar className='nav_main' collapsed={true} collapsedWidth={'70'}>
				{profile ? (
					<SidebarHeader className='sideheader'>
						<div>
							<img src={pic} alt='profile-pic' />
							{name}
						</div>
					</SidebarHeader>
				) : (
					''
				)}
				<Menu iconShape='circle'>
					<MenuItem icon={<FaGem />}>Dashboard</MenuItem>
					<SubMenu title='Components' icon={<FaHeart />}>
						<MenuItem>Component 1</MenuItem>
						<MenuItem>Component 2</MenuItem>
					</SubMenu>
					<MenuItem icon={<FaGem />}>Dashboard</MenuItem>
					<MenuItem icon={<FaGem />}>Dashboard</MenuItem>
					{profile != null ? <SignOut /> : ''}
				</Menu>
				<SidebarFooter>
					<div className='footer'>
						Made with LOVE
						<br />
						By
						<br />
						ankitsinha
					</div>
				</SidebarFooter>
			</ProSidebar>
		</div>
	);
};
export default Navbar;
