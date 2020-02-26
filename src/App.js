import React from 'react';
import './App.css';
import ReactAudioPlayer from 'react-audio-player';
import music from './Music/test.wav'

function App() {
	// const myaudio = new Audio(music)
	// myaudio.play();
	// myaudio.loop = true;
	return (
		<ReactAudioPlayer
			src={music}
			autoPlay
			controls
		/>
	);
}

export default App;
