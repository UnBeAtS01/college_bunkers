import './App.css';
import Basketball from './components/kidhar_hai_bhai/basket';
import Container from './components/kidhar_hai_bhai/container';
import Football from './components/kidhar_hai_bhai/football';
import Gym from './components/kidhar_hai_bhai/gym';
import SamjhaKar from './components/kidhar_hai_bhai/samjhakaro';
function App() {
	return (
		<div className='App'>
			<div>hii</div>
			<Container><Basketball/></Container>
			<Container><Football/></Container>
			<Container><Gym/></Container>
			<Container><SamjhaKar/></Container>
			
		</div>
	);
}

export default App;
