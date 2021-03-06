import React, { useEffect, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

import { io } from 'socket.io-client';

const toolbarOptions = [];
function Editors(props) {
	const [socket, setSocket] = useState();
	const [quill, setQuill] = useState();
	const id = props.id;
	useEffect(() => {
		const quillServer = new Quill(`#${id}`, {
			modules: { toolbar: toolbarOptions },
		});
		quillServer.disable();
		quillServer.setText('Loading.....');
		setQuill(quillServer);
	}, []);
	useEffect(() => {
		const socketServer = io('https://serverbunker.herokuapp.com/');
		setSocket(socketServer);
		return () => {
			socketServer.disconnect();
		};
	}, []);

	//send
	useEffect(() => {
		if (socket === null || quill === null) return;
		const handleChange = (delta, olddata, source) => {
			if (source !== 'user') return;
			socket && socket.emit('send-changes', delta);
		};
		quill && quill.on('text-change', handleChange);
		return () => {
			quill && quill.off('text-change', handleChange);
		};
	}, [socket, quill]);

	//receive
	useEffect(() => {
		if (socket === null || quill === null) return;
		const handleChange = (delta) => {
			quill.updateContents(delta);
		};
		socket && socket.on('receive-changes', handleChange);
		return () => {
			socket && socket.off('receive-changes', handleChange);
		};
	}, [socket, quill]);

	useEffect(() => {
		if (quill === null || socket === null) return;
		socket &&
			socket.once('load-document', (document) => {
				quill && quill.setContents(document);
				quill && quill.enable();
			});
		socket && socket.emit('get-document', id);
	}, [quill, socket, id]);

	useEffect(() => {
		if (socket === null || quill === null) return;
		const interval = setInterval(() => {
			socket && socket.emit('save-document', quill.getContents());
		}, 2000);

		return () => {
			clearInterval(interval);
		};
	}, [socket, quill]);
	return (
		<div className={`${id}`}>
			<div className={`container+${id}`} id={`${id}`}></div>
		</div>
	);
}

export default Editors;
