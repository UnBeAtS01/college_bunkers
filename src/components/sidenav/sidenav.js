import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter } from 'react-pro-sidebar';
import SignOut from '../../pages/signout.js';
import { FaHouseDamage, FaMusic, FaHeart, FaRegComments, FaStreetView } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { auth } from '../../firebase/firebaseconfig.js';
import './sidenav.scss';

import { Link } from 'react-scroll';

const Navbar = ({ profile, handleChat, OpenClassZone }) => {
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
	const helper = () => {
		handleChat();
		OpenClassZone(0);
	};
	return (
		<div className='sidenav'>
			<ProSidebar className='nav_main' collapsed={true} collapsedWidth={'70'}>
				{profile ? (
					<SidebarHeader className='sideheader'>
						<div className='image_profile'>
							<img src={pic} alt='profile-pic' />
							<span className='text'>{name}</span>
						</div>
					</SidebarHeader>
				) : (
					''
				)}
				<Menu iconShape='circle'>
					<MenuItem icon={<FaHouseDamage />}>
						<Link onClick={() => OpenClassZone(0)} to='main' spy={true} smooth={true}>
							Main
						</Link>
					</MenuItem>
					<MenuItem icon={<FaMusic />}>
						<Link onClick={() => OpenClassZone(0)} to='music' spy={true} smooth={true}>
							music
						</Link>
					</MenuItem>
					<MenuItem icon={<FaRegComments />} onClick={helper}>
						chat
					</MenuItem>
					<MenuItem onClick={() => OpenClassZone()} icon={<FaStreetView />}>
						<div>classZone</div>
					</MenuItem>
					{profile != null ? <SignOut /> : ''}
				</Menu>
				<SidebarFooter>
					<div className='footer'>
						<div style={{ textAlign: 'center' }}>Made with</div>
						<br />
						<div style={{ textAlign: 'center' }}>
							<FaHeart style={{ fontSize: 18, color: '#FF0000' }} />
						</div>
						<br />
						<div style={{ textAlign: 'center' }}>By</div>
						<br />
						<div style={{ textAlign: 'center' }}>EIE</div>
					</div>
				</SidebarFooter>
			</ProSidebar>
		</div>
	);
};
export default Navbar;
