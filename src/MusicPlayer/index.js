import React, { useState, useRef } from 'react';
import './index.css';
import playImg from '../Img/play.png'


function Player(props) {
    // const audioObject = useRef(null);

    // useEffect(() => {
    //     if (audioObject !== null)
    //         audioObject.current.audioEl.currentTime = props.time;
    // });
    const [isPlaying, setisPlaying] = useState(false)

    return (
        <div className="Player">
            <div className="Cover">
                <div className="BtBg">
                </div>
            </div>
            <div className={["Button", isPlaying ? "active":null].join(' ')} onClick={()=>setisPlaying(!isPlaying)}>
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