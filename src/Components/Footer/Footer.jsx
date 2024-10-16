import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";



const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="container">
            <div className="footer_row">
                <div className="footer_logo">
                    <Link to="/"> <img src={logo} alt="logo" /></Link>
                </div>
                <div className="footer_text">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Services</Link></li>
                        <li><Link to="/">Schedule</Link></li>
                        <li><Link to="/">Contact us</Link></li>
                    </ul>
                </div>
                <div className="footer_icon">
                <Link to="/"><FiYoutube /></Link>
                <Link to="/"> <FaInstagram /></Link>
                <Link to="/"><SlSocialTwitter /></Link>
                <Link to="/"><SlSocialFacebook /></Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer