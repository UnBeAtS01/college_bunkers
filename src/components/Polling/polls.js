import { useState } from 'react';
import firebase from 'firebase';
import { firestore, auth } from '../../firebase/firebaseconfig';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import './polls.scss';
const ShowPolls = () => {
	const messagesRef = firestore.collection('JU_POLLS');
	const query = messagesRef;
	const [upcommingPolls] = useCollectionData(query, { idField: 'id' });
	console.log(upcommingPolls);
	const handleVote = (id, idx, array, votecastby) => {
		let flag = 0;
		console.log(votecastby, flag);
		const userid = auth.currentUser.uid;
		for (let i = 0; i < votecastby.length; i++) {
			if (votecastby[i] == userid) {
				flag = 1;
			}
		}
		console.log(flag);
		if (flag === 0) {
			let newcastby = [...votecastby];
			newcastby.push(userid);
			let newarray = [...array];
			newarray[idx].vote += 1;
			console.log('click', id);
			firestore.collection('JU_POLLS').doc(id).set({ array: newarray, votecastby: newcastby }, { merge: true });
		}
	};
	return (
		<div>
			{upcommingPolls &&
				upcommingPolls.map((ele, idx) => {
					console.log(ele);
					return (
						ele.array &&
						ele.array.map((inside, idx2) => {
							if (idx2 == 1) return;
							if (idx2 == 0) return <div key={idx2}>{inside.question}</div>;
							else
								return (
									<div className='polls_container'>
										<div className='vote_display' key={idx2} onClick={() => handleVote(ele.id, idx2, ele.array, ele.votecastby)}>
											{inside.option}
											<div
												className='show_percentage'
												style={{ width: `${Math.floor((inside.vote / Math.max(1, ele.votecastby.length)) * 100)}%` }}
											></div>
										</div>
										<div className='percentage_div'>{Math.floor((inside.vote / Math.max(1, ele.votecastby.length)) * 100)}</div>
									</div>
								);
						})
					);
				})}
		</div>
	);
};

export default ShowPolls;
