import Signin from './signin';
import homepagesvg from '../assets/homesvg.svg';
import './homepage.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const HomePage = () => {
	return (
		<div className='home_page'>
			<div className='first_div'>
				<div className='first_div_title'>
					<div>JU</div>
					<div style={{ paddingLeft: 10 }}>#BUNKERS</div>
				</div>
				<div className='first_div_heading'>making college easy...</div>
				<div className='first_div_text'>Trying simplifying college lyf by bringing everything together.created by student for students</div>
				<div className='first_div_follow'>
					<span>follow me on:</span> <FaGithub className='first_div_logo' />
					<FaLinkedin className='first_div_logo' />
				</div>
				<Signin />
			</div>
			<div className='second_div'>
				<img className='second_div_svg' src={homepagesvg} alt='svg_animation' />
			</div>
		</div>
	);
};
export default HomePage;