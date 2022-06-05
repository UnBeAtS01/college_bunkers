import './App.css';
import Basketball from './components/kidhar_hai_bhai/basket';
import Container from './components/kidhar_hai_bhai/container';
import Football from './components/kidhar_hai_bhai/football';
import Gym from './components/kidhar_hai_bhai/gym';
import SamjhaKar from './components/kidhar_hai_bhai/samjhakaro';
import Event from './components/party_kab_hai/event.js';
import { auth } from './firebase/firebaseconfig';
import { useAuthState } from 'react-firebase-hooks/auth';

import Navbar from './components/sidenav/sidenav.js';
import { useEffect, useState } from 'react';
import ChatRoom from './components/chatroom/chatroom';
import CollegeNotice from './components/college_notice/clg_notice';
import VoteCard from './components/Polling/voteCard';
import HomePage from './pages/homepage.js';
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
					<HomePage />
				) : (
					<>
						<div className='inside_page'>
							<section className='blue'>
								<svg
									className='wave2'
									xmlns='http://www.w3.org/2000/svg'
									version='1.1'
									viewBox='0 0 900 600'
									preserveAspectRatio='none'
								>
									<path fill='#fff' d='M0 0H900V600H0z'></path>
									<path fill='#90f' d='M0 306h129v21h128v-31h129v-71h128v68h129v45h128V216h129v119V0H0z'></path>
									<path fill='#7700c6' d='M0 193h129v41h128v-42h129v13h128v-45h129v-17h128v25h129V0H0z'></path>
									<path fill='#560090' d='M0 100h129V89h128v15h129v41h128V81h129v-2h128V64h129v54V0H0z'></path>
								</svg>
							</section>

							<section className='bubble'></section>
							<section className='dark'></section>
							<section className='red'>
								<div className='wave'>
									<svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
										<path
											d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
											className='shape-fill'
										></path>
									</svg>
								</div>
							</section>
							<div className='spacer layer1'></div>
							<section></section>
							<div className='spacer layer2 flip'></div>
							<section className='pink'>
								<div className='blob-content'></div>

								<svg
									xmlns='http://www.w3.org/2000/svg'
									id='visual'
									width='960'
									height='540'
									className='blob-motion'
									version='1.1'
									viewBox='0 0 960 540'
								>
									<g transform='translate(450.726 283.494)'>
										<path
											id='blob1'
											fill='#BB004B'
											d='M148.7-134.9c45 31.2 83.2 83 83.7 135.5.6 52.4-36.3 105.5-81.3 128S53 143-4.4 147.4c-57.4 4.4-119.1 21.1-146.8-1.4-27.6-22.5-21.2-84.2-21.6-146.4-.3-62.1-7.5-124.5 20.2-155.7 27.7-31.2 90.1-31 147.3-25.7 57.2 5.3 109 15.8 154 46.9'
										></path>
									</g>
									<g transform='translate(509.544 281.494)' visibility='hidden'>
										<path
											id='blob2'
											fill='#BB004B'
											d='M115.4-137.9c22.5 45 21 91.5 18.2 135.1-2.8 43.6-7 84.4-29.5 121.2S40.8 188.1-8.4 196.5c-49.1 8.3-106.6-7.8-142.6-44.6-36-36.9-50.5-94.4-39.8-141.2 10.7-46.8 46.7-82.8 82.7-127.8s72-99 113.3-104.1c41.2-5.2 87.7 38.3 110.2 83.3'
										></path>
									</g>
								</svg>
							</section>
							<div className='spacer layer2'></div>
							<section className='blobs'></section>
						</div>
						<div className='event_notice_div'>
							<Event />
							<CollegeNotice />
						</div>
						<div className='kidhar_div'>
							<Container name='BasketBall ground 🏀'>
								<Basketball />
							</Container>
							<Container name='Football Ground ⚽'>
								<Football />
							</Container>
							<Container name='Gym 💪🏼'>
								<Gym />
							</Container>
							<Container name='Samjha Karo Bhai ⚡ '>
								<SamjhaKar />
							</Container>
						</div>

						<ChatRoom />

						<VoteCard />
					</>
				)}
			</div>
		</div>
	);
}

export default App;
