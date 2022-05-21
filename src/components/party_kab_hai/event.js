import React, { useState } from 'react';
import firebase from 'firebase/app';
import { firestore, auth } from '../../firebase/firebaseconfig';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useEffect } from 'react';
import { getEvent } from '../../apicalls/eventcall';
import nothing from '../../assets/nothing3.gif';
const Event = () => {
	const [date, setEventdate] = useState('2001-07-13');
	const [event, setEvent] = useState('');
	const [data, setData] = useState([]);
	const messagesRef = firestore.collection('Ju_bunker_events');
	const query = messagesRef.orderBy('date').limit(25);
	const [messages] = useCollectionData(query, { idField: 'id' });
	useEffect(() => {
		async function getdata() {
			let data = await getEvent();
			setData(data);
		}
		getdata();
	}, []);
	const handleClick = async () => {
		let val = window.confirm('You want to add this event for class');
		const { uid, photoURL, name } = auth.currentUser;
		if (val && event !== '' && date !== '2001-07-13') {
			await messagesRef.add({
				text: event,
				createdAt: firebase.firestore.FieldValue.serverTimestamp(),
				uid,
				photoURL,
				date: date,
			});
			console.log('event added');
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
	return (
		<>
			<div className='event_image'>
				<img src={`${data.length ? data[0].gif : nothing}`} alt='loading...' />
			</div>
			<div>
				<input type='text' name='event_name' value={event} onChange={setText} placeholder='enter upcoming event' />
				<input type='date' name='event_date' value={date} onChange={setDate} />
				<button onClick={handleClick}>+ADD</button>
			</div>
		</>
	);
};

export default Event;
