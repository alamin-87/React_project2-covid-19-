import React from 'react'
import'./CommonButton.css'
import { Link } from 'react-router-dom'

const CommonButton = ({commonbutton}) => {
  return (
    <>
    <Link className='commonbutton_text' to="/">{commonbutton}</Link>
    </>
  )
}

export default CommonButton