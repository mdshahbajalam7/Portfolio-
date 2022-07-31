import React from 'react'
import "./Callpagefooter.scss"

function Callpagefooter() {
  return (
    <div className='footer-div'>
      <div className='left-itme'>
        <div className='icon-block'>
          Meeting details
          <i class="fa-solid fa-angle-up"></i>
        </div>
      </div>
      <div className='center-itme'>
        <div className='itme-block'>
        <i class="fa-solid fa-microphone"></i>
        </div>
        <div className='itme-block'>
        <i style={{color:"red"}} class="fa-solid  fa-phone"></i>
        </div>
        <div className='itme-block'>
        <i class="fa-solid fa-video"></i>
        </div>
      </div>
      <div className='right-itmes'>
        <div className='icon-block'>
        <i class="fa-solid fa-closed-captioning"></i>
        <p className='tittle'>Turn on caption</p>
        </div>
        <div className='icon-block'>
        <i class="fa-solid fa-desktop"></i>
        <p className='tittle'>Present Now</p>
        </div>
      </div>
    </div>
  )
}

export default Callpagefooter