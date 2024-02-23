import React from 'react'
import main from './main.jpg'
import './ProfileImg.css'

const ProfileImg = () => {
  return (
    <div className='image'>
        <img src={main} alt='main'></img>
    </div>
  )
}

export default ProfileImg