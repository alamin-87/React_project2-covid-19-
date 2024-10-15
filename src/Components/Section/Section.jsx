import React from 'react'
import './Section.css'
import CommonButton from '../Common/CommonButton'
import { Link } from 'react-router-dom'
import { GrShieldSecurity } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { CiTempHigh } from "react-icons/ci";




const Section = () => {
  return (
    <>
      <section className='section'>
       <div className="section1">
       <div className="container">
            <div className="section_row">
                <div className="section_row1">
                    <img className=' img1' src="images/p1.png" alt="p1" />
                    <img className=' img2' src="images/p2.png" alt="p2" />
                    <img className=' img3' src="images/p3.png" alt="p3" />
                    <img className=' img4' src="images/p4.png" alt="p4" />
                </div>
            </div>
        </div>
       </div>
      <div className="section2">
      <div className="Section_row2">
         <div className="container">
              <div className="section_row2_content">
                 <div className="section_row2_head">
                     <p>Check your COVID-19 result on our Database</p>
                 </div>
                  <div className="section_row2_input">
                     <input className='input' type="text" placeholder='Okeowo' />
                     <input className='input' type="text" placeholder='NIK Number' />
                     <button className='button'> Check</button>
                     <h4>Need a certificate for your COVID-19 result? Please click <a href="/">here</a></h4>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="container">
            <div className="section3_row">
                <div className="section3_row1">
                    <h2>Why get vaccinated today?</h2>
                    <p>Magna adipiscing at elit at ornare lectus nibh lorem. Ac, sed ac lorem pellentesque vestibulum risus matti. In molestie condimentum malesuada non.</p>
                </div>
                <div className="section3_row2">
                    <div className="section3_row2_card1">
                       <GrShieldSecurity  className='section3_card1_icon'/>
                       <h2>Protects your immune system against viruses</h2>
                       <p>Velit ut consectetur mauris, orci amet, faucibus.</p>
                       <p>Sit turpis fringilla ipsum pretium,dictum. Dolor eget vel nulla lorem ac.</p>
                       <div className="more">
                          <h4>Read More</h4>
                          <FaArrowRightLong  className='more_icon'/>
                       </div>
                    </div>
                    <div className="section3_row2_card2">
                        <GoPeople  className='section3_row2_card2_icon'/>
                        <h2>Minimize the spread
                        of the Virus</h2>
                      <div className="more">
                          <h4>Read More</h4>
                          <FaArrowRightLong  className='more_icon'/>
                       </div>
                    </div>
                    <div className="section3_row2_card3">
                       <CiTempHigh  className='section3_row2_card3_icon'/>
                      <h2>Minimize the spread
                      of the Virus</h2>
                     <div className="more">
                          <h4>Read More</h4>
                          <FaArrowRightLong  className='more_icon'/>
                       </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="section4">
         <div className="container">
             <div className="section4_row">
                 <div className="section4_row_col1">
                      <h2>Get your vaccine registration today</h2>
                      <div className="section4_row_col1_img">
                          <img src="images/Group 40.png" alt="group40" />
                          <button>Verify Status</button>
                      </div>
                 </div>
                 <div className="section4_row_col2">
                      <h3>Patient’s Full Name</h3>
                       <input className='input1' type="text" placeholder='Full name' />
                       <h3>Mobile Number</h3>
                       <p>Notifications for appointment and reminders will be sent to this  provided number</p>
                     <div className="section4_row_col2_search">
                         <input type="text" placeholder='Phone number' />
                         <button className='button1'>Verify</button>
                     </div>
                     <button className='button2'>Submit</button>
                     <p className='p_tag'>Already registered ? <span><a href="/">Check your status</a></span></p>
                 </div>
             </div>
         </div>
      </div>
      <div className="section5">
        <div className="container">
            <div className="section5_row">
                <h3>Covid-19 Prevention</h3>
                <h2><span>COVID-19</span> Symptoms</h2>
                <p className='section5_p1'>Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit. </p>
                <p className='section5_p2'>Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.</p>
                <img src="images/Group 65.png" alt="" />
            </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Section