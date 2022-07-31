import React from 'react'
import "./Meetinginfo.scss"

export default function Meetinginfo() {
  return (
    <div className='info-block'>
      <div className='meeting-block'>
        <h3>Your Meeting's Ready</h3>
        <i class="fa-solid fa-xmark"></i>
      </div>
      <button className='add-btn'>
      <i class="fa-solid fa-user"></i>
        Add Others
      </button>
      <p className='info-text'>
        Or Shere this meeting link with othres yoy want in the meeting 
      </p>
      <div className='meet-url'>
        <span>Some Rendom Url</span>
        <i class="fa-solid fa-copy"></i>
      </div>
      <div className='permission-text'>
        <p className='small-text'>
        <i class="fa-solid fa-shield-halved"></i>
          People who use the meeting link must get your permission before they can join
        </p>
      </div>
      <p className='small-text'>
        join as mdshahbajalam38@gmail.com
      </p>
    </div>
  )
}
