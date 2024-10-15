import React, { useState } from 'react'
import "./ResponsiveNav.css"
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';


const RespoensiveNav = () => {

  const [show,setshow]=useState(false)

  return (
    <>
      <section className='ResponsiveNav'>
      <HiBars3BottomRight onClick={()=>setshow(!show)}  className='w-[45px] h-[45px] bg-[#C4C4C426] text-white rounded-[10px] p-[7px]'/>
      {
        show&&
        <div className="Res_menu_content">
                <div className="Res_menu_text">
                    <ul className=' flex flex-col items-center '>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Services</Link></li>
                        <li><Link to="/">Schedule</Link></li>
                        <li><Link to="/">Contact us</Link></li>
                    </ul>
                </div>
                <div className="Res_menu_button">
                    <button>Check Status</button>
                </div>
                </div>
      }
      </section>
    </>
  )
}

export default RespoensiveNav