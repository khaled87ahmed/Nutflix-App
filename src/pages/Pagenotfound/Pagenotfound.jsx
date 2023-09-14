import React from 'react'
import errImg from '../../Assets/Images/404.png'

export default function Pagenotfound() {
  return (
    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
      <img src={errImg} className='w-50 ' alt="" />
    </div>
  )
}
