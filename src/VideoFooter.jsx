import React from 'react'
import './VideoFooter.css'
import { Button,Avatar } from '@mui/material'
import MusicNoteIcon from '@mui/icons-material/MusicNote';  
import Marquee from'react-fast-marquee'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const VideoFooter = (props) => {
  return (
    <div className='videoFooter'>


        <div className='videoFooterText'>


            <Avatar src={props.avatar} />

            <h3>
                {props.channel} -- <Button>Follow</Button>
            </h3>

            <div className='videoFooterTicker'>
                <MusicNoteIcon className='musicIcon'/>
                <Marquee className='marquee'>
                    <h3>{props.song}</h3>
                </Marquee>
            </div>

            <div className='videoFooterActions'>
                <div className='videoFooterActionsLeft'>
                    <FavoriteIcon/>
                    <ChatBubbleIcon/>
                    <ShortcutIcon/>
                    <MoreHorizIcon/>

                </div>
                <div className='videoFooterActionsRight'>
                    <div className='stats'>
                        <FavoriteIcon/>
                        <p>{props.likes}</p>
                    </div>

                    <div className='stats'>
                        <ChatBubbleIcon/>
                        <p>{props.shares}</p>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default VideoFooter