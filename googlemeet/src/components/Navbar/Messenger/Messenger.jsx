import React from 'react'
import "./Messenger.scss"

function Messenger() {
  return (
    <div className='message-div'>
      <div className='message-block'>
        <h3>Metting Details</h3>
        <i class="fa-solid fa-x"></i>
      </div>
      <div className='message-header-div'>
        <div className='tab'>
        <i class="fa-solid fa-user-group"></i>
        <p>People (2)</p>
        </div>
        <div className='tab active'>
        <i class="fa-solid fa-comment"></i>
        <p>chat</p>
        </div>
      </div>
      <div className='chat-section'>
        <div className='chat-block'>
          <div className='second'>
            You <small>11 AM</small>
          </div>
          <p className='ptag'>
            Here comes a right message 
          </p>
        </div>
      </div>
       <div className='second-msg'>
        <input type="text" placeholder='Send message to everyone' />
        <i class="fa fa-paper-plane" aria-hidden="true"></i>
       </div>
    </div>
  )
}

export default Messenger