import React from 'react'
import Meetinginfo from "../Navbar/Meetinginfo/Meetinginfo"
import Callpagefooter from '../Navbar/Callpagefooter/Callpagefooter'
import Callpageheader from '../Navbar/callpageheader/Callpageheader'
import Messenger from "../Navbar/Messenger/Messenger"

import "./Callpage.scss"

function Callpage() {
  return (
    <div className='callpage-container'>
      <video className='video-container' src=''controls></video>
      <Callpageheader/>
      <Callpagefooter/>
      <Meetinginfo/>
      <Messenger/> 
    </div>
  )
}

export default Callpage