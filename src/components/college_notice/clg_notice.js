import { useEffect, useState } from 'react';
import { getNotice } from '../../apicalls/eventcall.js';
import './clg_notice.scss';
import notice_svg from '../../assets/notice.svg';
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
		<div className='notice_div'>
			<div className='notice_heading'>
				COLLEGE NOTICE
				<img src={notice_svg} alt='gif' className='image_notice' />
			</div>
			<div className='notice' dangerouslySetInnerHTML={{ __html: `${Notice}` }} />
		</div>
	);
};
export default CollegeNotice;
