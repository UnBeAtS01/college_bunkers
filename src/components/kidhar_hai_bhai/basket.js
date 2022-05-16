import React from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { io } from 'socket.io-client';
import { params, usePara } from 'react-router-dom';
import Editors from './editor.js';
const Basketball = () => {
	return (
		<>
			<Editors />
		</>
	);
};
export default Basketball;
