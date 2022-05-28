import { useEffect, useState } from 'react';
import { getNotice } from '../../apicalls/eventcall.js';
const CollegeNotice = () => {
	const [Notice, setNotice] = useState('');
	useEffect(() => {
		const getcollegeNotice = async () => {
			const element = await getNotice();
			//console.log(element);
			setNotice(element);
		};
		getcollegeNotice();
	}, []);

	return (
		<>
			<div dangerouslySetInnerHTML={{ __html: `${Notice}` }} />
		</>
	);
};
export default CollegeNotice;
