import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">
                <div className="footer__logo">
                    <h2>
                        <Link to={'/'} className="link logo_green">Dr.Sreelakshmi clinic</Link>
                    </h2>
                </div>
                <Link to={'/about'} className="link">About</Link>
                <Link to={'/contact'} className="link">Contact us</Link>
            </div>
            <div className="footer__middle">
                <div className="footer__heading">
                    <h2>SERVICES</h2>
                </div>
                <Link to={'/rejuvenation'} className="link">Rejuvenation &amp; Pain Relief Therapies</Link>
                <Link to={'/post_delivery_care'} className="link">Pregnancy &amp; Post Delivery Care</Link>
                <Link to={'/panchakarma'} className="link">Panchakarma</Link>
                <Link to={'/swarna_prashana'} className="link">Swarna Prashana</Link>
                <Link to={'/yoga'} className="link">Yoga</Link>
            </div>
            <div className="footer__right">
                <div className="footer__heading">
                    <h2>CONNECT WITH US</h2>
                </div>
                <p>Phone &amp; Whatsapp: <span style={{color:"lightgreen",fontWeight:"bold"}}>+91 97404 76241</span> </p>
                <p>Email: <span style={{color:"lightgreen"}}>drsreelekshmi'sclinic@gmail.com</span> </p>

                <p>First floor, Maruthi complex, SFS 407, 4t phase, Yelahanka New town, Bangalore 560064</p>
                <div className="footer__right__socialmedia">
                    <a href="https://www.instagram.com"><FaFacebook/></a>
                    <a href="https://www.facebook.com"><FaInstagram/></a>
                    <a href="https://www.twitter.com"><FaTwitter/></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
