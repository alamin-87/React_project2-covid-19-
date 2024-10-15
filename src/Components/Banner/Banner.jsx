import React from 'react'
import './Banner.css'
import CommonButton from '../Common/CommonButton'
import { Link } from 'react-router-dom'
import { MdAccessTime } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { GrShieldSecurity } from "react-icons/gr";




const Banner = () => {
  return (
   <>
     <section className=' banner bg-[url("images/bannerBg.png")]'>
     <div className="container">
        <div className="banner_row">
        <div className="banner_row1 ">
            <div className="banner_text">
                <h2>Get Vaccinated. Boost your Immune System</h2>
                <h1>COVID-19 Vaccination Got Easier With,<Link to="/"><span>Vaccination.ng</span></Link></h1>
                <p>Vaccination.ng will help you find the nearest
                centre for vaccination, in all 36 states in Nigeria.</p>
                <div className=' flex gap-5'>
                    <CommonButton commonbutton={'Get Vaccine'}/>
                    <CommonButton commonbutton={'Help Centre'}/>
                </div>
            </div>
            <div className="banner_img">
                <img src="images/Group 90.png" alt="group90" />
                <div className="img">
                    <img className='animationimg1' src="images/Group 17.png" alt="group17" />
                    <img className='animationimg2' src="images/Group 18.png" alt="group18" />
                </div>
                
            </div>
        </div>
        <div className="banner_row2">
            <div className="text1">
            <MdAccessTime  className='clockicon'/>
            <h3>Schedule your Vaccination</h3>
            </div>
            <div className="details">
              <div className="div1">
              <div className="location flex items-center gap-[10px]">
                 <CiLocationOn className='detailsicon' />
                  <div className="location_text">
                    <p>Location</p>
                    <h2>Ikeja Lagos, Nigeria</h2>
                  </div>
                </div>
                <div className="date flex items-center gap-[10px]">
                 <MdOutlineDateRange className='detailsicon' />
                 <div className="date_text">
                 <p>Date</p>
                 <h2>29 February, 2022</h2>
                 </div>
                </div>
              </div>
               <div className="div2">
               <div className="type flex items-center gap-[10px]">
                 <GrShieldSecurity  className='detailsicon'/>
                 <div className="type_text">
                 <p>Vaccine Type</p>
                 <h2>Mordena</h2>
                 </div>
                </div>
                <div className="banner_last_button">
                    <button className='last_button'>Submit</button>
                </div>
               </div>
            </div>
        </div>
        </div>
     </div>   
     </section>
   </>
  )
}

export default Banner