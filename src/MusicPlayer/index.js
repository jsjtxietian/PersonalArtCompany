import React, { useState, useRef, useEffect } from 'react';
import { Descriptions } from 'antd';
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
        <div>
            <Descriptions title="曲目介绍" size="small"  layout="vertical" bordered >
                <Descriptions.Item label="名称">{props.info.Name}</Descriptions.Item>
                <Descriptions.Item label="作者">{props.info.Author}</Descriptions.Item>
                <Descriptions.Item label="时间">{props.info.Time}</Descriptions.Item>
            </Descriptions>
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
        </div>

    )
}

export default Player;
