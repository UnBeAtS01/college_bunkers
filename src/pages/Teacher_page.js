import Card from '../components/Card/Card.js';
import './teacher_page.scss';
const data = {
	name: [
		'Mr. Samit Pahari',
		'Prof. Chandan Mazumdar',
		'Runu Banerjee',
		'Bivas Dam',
		'	Kumardeb Banerjee',
		'Rajib Bandyopadhyay',
		'Ratna Ghosh',
		'Ardhendu Ghoshal',
	],
	phoneNO: [3324572215, 3324572287, 33 - 2335 - 2587, 9331042314, 7074083480, 9331038954, 23352587, 33 - 23352587],
	email: [
		' secretaryfet@jadavpuruniversity.in',
		'deanfet@jadavpuruniversity.in',
		'runu.banerjee@jadavpuruniversity.in',
		'bd@iee.jusl.ac.in',
		'kdb@iee.jusl.ac.in',
		'rajib.bandyopadhyay@jadavpuruniversity.in',
		'rg@iee.jusl.ac.in',
		'ag@iee.jusl.ac.in',
	],
	description: [
		'Secretary - Faculty of Engineering and Technology',
		'Dean - Faculty of Engineering and Technology',
		'Professors',
		'Professors',
		'Professors',
		'Professors',
		'Professors',
		'Professors',
	],
	ProfileImg: [
		'https://www.linkpicture.com/q/default.webp',
		'https://www.linkpicture.com/q/default.webp',
		'https://www.linkpicture.com/q/runumam.webp',
		'https://www.linkpicture.com/q/bdsir.jpg',
		'https://www.linkpicture.com/q/kdbsir.jfif',
		'https://www.linkpicture.com/q/brbsir.jpg',
		'https://www.linkpicture.com/q/rgmam.jfif',
		'https://www.linkpicture.com/q/ad.jfif',
	],
};

const Teacher = () => {
	return (
		<div className='Teacher_div'>
			<div className='Teacher_div_studentZone'>OFFICIAL DETAILS</div>
			<div className='Teacher_div_cards'>
				{data.name.map((ele, idx) => (
					<Card
						key={idx}
						name={ele}
						phoneNO={data.phoneNO[idx]}
						emailId={data.email[idx]}
						description={data.description[idx]}
						ProfileImg={data.ProfileImg[idx]}
					/>
				))}
			</div>
		</div>
	);
};
export default Teacher;
