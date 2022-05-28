import { useState } from 'react';
import firebase from 'firebase';
import { firestore, auth } from '../../firebase/firebaseconfig';
import { useCollectionData } from 'react-firebase-hooks/firestore';
const ShowPolls = () => {
	const messagesRef = firestore.collection('JU_POLLS');
	const query = messagesRef;
	const [upcommingPolls] = useCollectionData(query, { idField: 'id' });
	console.log(upcommingPolls);
	const handleVote = (id, idx, array) => {
		let newarray = [...array];
		newarray[idx].vote += 1;
		console.log('click', id);
		firestore.collection('JU_POLLS').doc(id).set({ array: newarray }, { merge: true });
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
									<div key={idx2} onClick={() => handleVote(ele.id, idx2, ele.array)}>
										{inside.option}
									</div>
								);
						})
					);
				})}
		</div>
	);
};

export default ShowPolls;
