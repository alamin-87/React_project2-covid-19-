import React from 'react'
import "./Navbar.css"
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import RespoensiveNav from './RespoensiveNav'

const Navbar = () => {
  return (
    <>
      <nav className='p-[12px] absolute w-full'>
        <div className="container">
            <div className="menu_row flex justify-between items-center">
                <div className="menu_logo">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>
                <div className="menu">
                <div className="menu_content">
                <div className="menu_text">
                    <ul className=' flex gap-[25px]'>
                        <li className=' w-[136px] h-[29px] text-[24px] text-[#FFFFFF80] font-montserrat font-[500] hover:font-[700] hover:text-[#fff]'><Link to="/">Home</Link></li>
                        <li className=' w-[136px] h-[29px] text-[24px] text-[#FFFFFF80] font-montserrat font-[500] hover:font-[700] hover:text-[#fff]'><Link to="/">Services</Link></li>
                        <li className=' w-[136px] h-[29px] text-[24px] text-[#FFFFFF80] font-montserrat font-[500] hover:font-[700] hover:text-[#fff]'><Link to="/">Schedule</Link></li>
                        <li className=' w-[136px] h-[29px] text-[24px] text-[#FFFFFF80] font-montserrat font-[500] hover:font-[700] hover:text-[#fff]'><Link to="/">Contact us</Link></li>
                    </ul>
                </div>
                <div className="menu_button">
                    <button className=' w-[219px] h-[69px] bg-[#C4C4C41A] rounded-[20px] text-[#17C2EC] text-[24px] font-montserrat font-[700] hover:border-solid hover:border-[2px] hover:border-[#17C2EC]'>Check Status</button>
                </div>
                </div>
                </div>
                <RespoensiveNav/>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar