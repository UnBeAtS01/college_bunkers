import Signin from './signin';
import HandleSvg from './HandleSvg';
import './homepage.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const HomePage = () => {
	return (
		<div className='home_page'>
			<div className='first_div'>
				<div className='first_div_title'>
					<div></div>
					<div style={{ paddingLeft: 10 }}>#BUNKERS</div>
				</div>
				<div className='first_div_heading'>making college easy...</div>
				<div className='first_div_text'>Trying simplifying college lyf by bringing everything together.created by student for students</div>
				<div className='first_div_follow'>
					<span>follow me on:</span>{' '}
					<a href='https://github.com/UnBeAtS01'>
						<FaGithub className='first_div_logo' />
					</a>
					<a href='https://www.linkedin.com/in/ankit-sinha-5318721ba/'>
						<FaLinkedin className='first_div_logo' />
					</a>
				</div>
				<Signin />
			</div>
			<div className='second_div'>
				<HandleSvg />
			</div>
		</div>
	);
};
export default HomePage;
