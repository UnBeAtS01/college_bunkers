import React from 'react';
import './container.scss';
const Container = ({ children, name }) => {
	return (
		<>
			<div className='container'>
				<div className='location_title'>{name}</div>
				<div className='text-editor-container'>{children}</div>
			</div>
		</>
	);
};

export default Container;
