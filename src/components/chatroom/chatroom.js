import { firestore, auth } from '../../firebase/firebaseconfig.js';
import firebase from 'firebase/app';
//import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useState, useEffect } from 'react';

import './chatroom.scss';
const ChatRoom = () => {
	const messagesRef = firestore.collection('messages');
	const query = messagesRef.orderBy('createdAt').limit(200);
	const [messages] = useCollectionData(query, { idField: 'id' });
	const [messagedata, setMessage] = useState(null);
	useEffect(() => {
		setMessage(messages);
	}, [messages]);
	console.log(messages);
	const [formValue, setFormValue] = useState('');
	const sendMessage = async (e) => {
		e.preventDefault();
		const { uid, photoURL } = auth.currentUser;
		if (formValue !== '') {
			await messagesRef.add({
				text: formValue,
				createdAt: firebase.firestore.FieldValue.serverTimestamp(),
				uid,
				photoURL,
			});

			setFormValue('');
		}
	};
	return (
		<div className='chatroom'>
			<div className='chatroom-chats'>
				{auth.currentUser && messagedata && messagedata.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
			</div>
			<div className='chatroom-input-div'>
				<form className='chatroom-input' onSubmit={sendMessage}>
					<div className='chatroom-input-text-div'>
						{' '}
						<input value={formValue} onChange={(e) => setFormValue(e.target.value)} className='chatroom-input-text' />
					</div>
					<div className='chatroom-input-button-div'>
						{' '}
						<button type='submit' className='chatroom-input-button'>
							send
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

function ChatMessage(props) {
	const { text, uid, photoURL } = props.message;
	const messageClass = auth.currentUser && uid === auth.currentUser.uid ? 'sent' : 'received';
	return (
		<div className={`message ${messageClass}`}>
			<div className='image-div'>
				{' '}
				<img className='image' src={photoURL} alt='profilepic' />
			</div>
			<div className='text-div'>
				<span className='text'>
					<p>{text}</p>
				</span>
			</div>
		</div>
	);
}
export default ChatRoom;
