import React, { useState, useRef, useEffect } from 'react';
import './index.css';


function Player(props) {

    const [isPlaying, setisPlaying] = useState(false);
    const audioObject = useRef(null);

    useEffect(() => {
        if (audioObject !== null) {
            if (isPlaying && audioObject.current.paused) {
                audioObject.current.play();
            }
            if (!isPlaying && !audioObject.current.paused) {
                audioObject.current.pause();
            }
        }
    }, [isPlaying]);

    useEffect(() => {
        if (audioObject !== null) {
            audioObject.current.currentTime = props.time;
        }
    }, [props.time]);

    useEffect(() => {
        console.log(isPlaying)
        setisPlaying(false);
    }, [props.track]);

    return (
        <div className="Player">
            <div className={["Cover", isPlaying ? "CoverActive" : null].join(' ')}>
                <div className="BtBg">
                </div>
            </div>
            <div className={["Button", isPlaying ? "ButtonActive" : null].join(' ')} onClick={() => setisPlaying(!isPlaying)}>
                <audio src={props.track} ref={audioObject}>
                </audio>
            </div>
        </div>
    )
}

export default Player;

// <ReactAudioPlayer
//             ref={audioObject}
//             src={props.track}
//             controls
//         />