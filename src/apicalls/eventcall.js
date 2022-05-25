import axios from 'axios';
const url = 'http://localhost:9000';

export const getEvent = async () => {
	return [];
	//await axios.get(`${url}/events`);
};
export const getNotice = async () => {
	const val = await axios.get(`${url}/notice`, {
		mode: 'cors',
	});
	//console.log(val);

	console.log(val.data);
	return val.data;
};
