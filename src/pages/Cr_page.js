import Card from '../components/Card/Card.js';
import './cr_page.scss';
const data = {
	name: ['Sohaib Akhtar', 'Debojit ghosh', 'Supradeep bhunia', 'Bipornak Roy', 'Gourab Chatterjee', 'Ankit Sinha'],
	phoneNO: [6203934970, 8902287177, 9564775651, 9775588256, 7074083480, 7488879327],
	email: ['iee.jaduniv23@gmail.com', 'ghoshdebo2000@gmail.com', 'ankitsinha.ju@gmail.com'],
	description: [
		'Class representative',
		'Class representative',
		'Class representative',
		'Placement coordinator of Campus',
		'Placement coordinator of Branch',
		'Admin',
	],
	ProfileImg: [
		'https://www.linkpicture.com/q/Screenshot_20220619-163321.png',
		'https://www.linkpicture.com/q/dg.jpg',
		'https://www.linkpicture.com/q/plimg.jpg',
		'https://www.linkpicture.com/q/bp.jpg',
		'https://www.linkpicture.com/q/gc_1.jpg',
		'https://www.linkpicture.com/q/admin.webp',
	],
};

const CR = () => {
	return (
		<div className='CR_div'>
			<div className='CR_div_studentZone'>STUDENT DETAILS</div>
			<div className='CR_div_cards'>
				{data.name.map((ele, idx) => (
					<Card
						key={idx}
						name={ele}
						phoneNO={data.phoneNO[idx]}
						emailId={data.email[0]}
						description={data.description[idx]}
						ProfileImg={data.ProfileImg[idx]}
					/>
				))}
			</div>
		</div>
	);
};
export default CR;
