import './card.scss';
import { FaPhoneAlt, FaRegEnvelope, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
const Card = ({ name, phoneNO, emailId, description, ProfileImg }) => {
	return (
		<div className='card_div'>
			<div className='card_content_div'>
				<img src={ProfileImg} alt='person' />
				<div className='card_pn'>
					<FaQuoteLeft className='qoute' />
					{name}
					<FaQuoteRight className='qoute' />
				</div>
				<div className='card_des'>{description}</div>
			</div>
			<div className='card_absoute_div'>
				<a href={`tel:${phoneNO}`}>
					<FaPhoneAlt />
				</a>
				<a href={`mailto:${emailId}`}>
					<FaRegEnvelope />
				</a>
			</div>
		</div>
	);
};

export default Card;
