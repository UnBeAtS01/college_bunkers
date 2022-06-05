import { useState } from 'react';
import firebase from 'firebase/app';
import { firestore, auth } from '../../firebase/firebaseconfig';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import './createVote.scss';
const CreateVote = () => {
	const [options, setOptions] = useState([{ question: '' }, { createdAt: '' }, { option: '', vote: 0 }, { option: '', vote: 0 }]);
	const messagesRef = firestore.collection('JU_POLLS');
	const query = messagesRef;
	const [Polls] = useCollectionData(query, { idField: 'id' });
	console.log(Polls);
	const handleChange = (e, idx) => {
		const array = [...options];
		array[idx].option = e.target.value;
		setOptions(array);
	};
	const Addoption = () => {
		const array = [...options];
		array.push({ option: '', vote: 0 });
		setOptions(array);
	};
	const DeleteOption = () => {
		const array = [...options];
		if (array.length > 3) array.pop();
		setOptions(array);
	};
	const Publish = async () => {
		let val = window.confirm('want to publish this poll?');
		let valid = 1;
		let array = [...options];
		array[1].createdAt = new Date();
		for (let i = 2; i < options.length; i++) if (options[i].option == '') valid = 0;
		if (val && valid) {
			const votecastby = [];
			await messagesRef.add({ array, votecastby });
			console.log('data added');
			const arraytemp = [{ question: '' }, { createdAt: '' }, { option: '', vote: 0 }, { option: '', vote: 0 }];
			setOptions(arraytemp);
		}
	};
	const QuestionChange = (e) => {
		const array = [...options];
		array[0].question = e.target.value;
		setOptions(array);
	};
	return (
		<div className='create_polls'>
			<input type='text' value={options[0].question} placeholder='your question' onChange={QuestionChange} />
			{options &&
				options.map((ele, idx) => {
					if (idx > 1)
						return (
							<input key={idx} onChange={(e) => handleChange(e, idx)} type='text' value={ele.option} placeholder={`option${idx - 1}`} />
						);
					else return;
				})}
			<div className='button_div'>
				<button onClick={Addoption}>+ADD</button>
				<button onClick={DeleteOption}>-DELETE</button>
				<button onClick={Publish}>PUBLISH</button>
			</div>
		</div>
	);
};
export default CreateVote;
