import React from 'react'
import { useState } from'react'
import { useRef } from 'react'
import './VideoCard.css'
import VideoHeader from './VideoHeader'
import VideoFooter from './VideoFooter'

const VideoCard = (props) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress = () => {
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }

    }


  return (
    <div className='videoCard'>
        <VideoHeader/>


        <video
        ref={videoRef}
        onClick={onVideoPress}
        className='thevideo'
        src={props.url}
        alt=''
        loop
        />

        <VideoFooter
            channel={props.channel}
            likes={props.likes}
            shares={props.shares}
            avatar={props.avatar}
            song={props.song}
        />


    </div>
  )
}

export default VideoCard