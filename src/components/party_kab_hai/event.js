import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { firestore, auth } from '../../firebase/firebaseconfig';
import { useCollectionData } from 'react-firebase-hooks/firestore';
//import { useEffect } from 'react';
//import { getEvent } from '../../apicalls/eventcall';
import nothing from '../../assets/nothing3.gif';
import './event.scss';
import partysvg from '../../assets/party_hai.svg';
const Event = () => {
	const defaultimage = 'https://i.imgur.com/gkPgT6a.gif';
	const [date, setEventdate] = useState('2022-07-13');
	const [event, setEvent] = useState('');
	const [todayshow, SetshowEvent] = useState([]);
	const [data, setData] = useState([]);
	const [eventImage, setEventimg] = useState(null);
	const messagesRef = firestore.collection('Ju_bunker_events');
	const query = messagesRef.orderBy('date').limit(25);
	const [upcommingevent] = useCollectionData(query, { idField: 'id' });
	console.log(upcommingevent);
	useEffect(() => {
		if (upcommingevent) {
			for (let i = 0; i < upcommingevent.length; i++) {
				if (upcommingevent[i].date >= formatDate(new Date())) {
					SetshowEvent(upcommingevent[i]);
					break;
				}
			}
		}
	}, [messagesRef]);

	function formatDate(date) {
		var d = new Date(date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		return [year, month, day].join('-');
	}

	const handleClick = async () => {
		let val = window.confirm('You want to add this event for class');
		const { uid } = auth.currentUser;
		let todayDate = formatDate(new Date());
		console.log(todayDate);
		if (val && event !== '' && date >= todayDate) {
			await messagesRef.add({
				text: event,
				createdAt: firebase.firestore.FieldValue.serverTimestamp(),
				uid,
				event_image: eventImage !== null ? eventImage : defaultimage,
				date: date,
			});
			setEvent('');
			setEventimg(null);
			console.log('event added');
		} else {
			alert('wrong input format');
		}
	};
	const setText = (e) => {
		setEvent(e.target.value);
		console.log(event);
	};
	const setDate = (e) => {
		setEventdate(e.target.value);
		console.log(date);
	};
	const setImage = (e) => {
		setEventimg(e.target.value);
	};
	return (
		<div className='event_main_div'>
			<div className='event_heading'>Upcomming Event</div>
			<div className='event_image'>
				<img src={`${upcommingevent ? todayshow.event_image : defaultimage}`} alt='loading...' />
				<div className='event_name'>
					{upcommingevent ? todayshow.text : 'No Event'}
					<div style={{ marginTop: 5, textAlign: 'center' }} className='blink_me'>
						{' '}
						{upcommingevent ? todayshow.date : ''}
					</div>
					<img className='party_svg' src={partysvg} alt='img_party' />
				</div>
			</div>
			<div className='input_event'>
				<input type='text' name='event_name' value={event} onChange={setText} placeholder='enter upcoming event' />
				<input type='date' name='event_date' value={date} onChange={setDate} />
				<input type='url' name='event-image' value={eventImage} onChange={setImage} placeholder='url for gif or image' />
				<button onClick={handleClick}>+ADD</button>
			</div>
		</div>
	);
};

export default Event;
