import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <div className="app-download-platform">
        <a href="https://www.instagram.com/vasanth_kumar.27?igsh=MXB0aTdwYzZheGk1dg%3D%3D"  rel="noopener noreferrer">
          <img src={assets.play_store} alt="Play Store" />
        </a>
        <a href="https://www.instagram.com/vasanth_kumar.27?igsh=MXB0aTdwYzZheGk1dg%3D%3D"  rel="noopener noreferrer">
          <img src={assets.app_store} alt="App Store" />
        </a>
      </div>
    </div>
  )
}

export default AppDownload
