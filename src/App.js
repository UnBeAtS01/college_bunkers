import './App.css';
import Basketball from './components/kidhar_hai_bhai/basket';
import Container from './components/kidhar_hai_bhai/container';
import Football from './components/kidhar_hai_bhai/football';
import Gym from './components/kidhar_hai_bhai/gym';
import SamjhaKar from './components/kidhar_hai_bhai/samjhakaro';
import Event from './components/party_kab_hai/event.js';
import { auth } from './firebase/firebaseconfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import Signin from './pages/signin.js';
import Navbar from './components/sidenav/sidenav.js';
import { useEffect, useState } from 'react';
import ChatRoom from './components/chatroom/chatroom';
import CollegeNotice from './components/college_notice/clg_notice';
import VoteCard from './components/Polling/voteCard';
function App() {
	const [user] = useAuthState(auth);
	const [profile, setUser] = useState(null);
	useEffect(() => {
		setUser(user);
	}, [user]);
	return (
		<div className='App'>
			<Navbar profile={profile} />
			<div className='main-page'>
				{!profile ? (
					<Signin />
				) : (
					<>
						<Event />
						<Container>
							<Basketball />
						</Container>
						<Container>
							<Football />
						</Container>
						<Container>
							<Gym />
						</Container>
						<Container>
							<SamjhaKar />
						</Container>
						<ChatRoom />
						<CollegeNotice />
						<VoteCard />
					</>
				)}
			</div>
		</div>
	);
}

export default App;
