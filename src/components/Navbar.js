import React, { useEffect } from 'react';
import { NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {RiMenu3Fill, RiShoppingCart2Fill} from 'react-icons/ri';
import './Navbar.css';
import Header from './Header';
import { useState } from 'react';

const Navbar = ({toggle}) => {
    const invalidKey = '^BvasX$134!ZY453@23##!'
    const validKey = 'JG$@zn*^!$GHT)XrYZL4*@'
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const signOut =()=>{
        localStorage.removeItem("isLoggedIn")
        setIsLoggedIn(false)
        alert("Signed out")
    }

    useEffect(()=>{
        let value = localStorage.getItem("isLoggedIn") || invalidKey
        value === validKey?  setIsLoggedIn(true): setIsLoggedIn(false)
    },[isLoggedIn]);


    return (
        <div className="navbar__container">
            <div className="header">
                <Header/>
            </div>
            <div className="navbar">
                <div className="navbar__left">
                    <Link to={'/'} className="link navbar__logo">Dr.Sreelekshmi's <div style={{fontSize:"12px", color:"grey"}}>Kerala Ayurveda center</div></Link>
                </div>
                <div className="navbar__middle">
                    <Link to={'/about'} className="link">About</Link>
                    <Link to={'/contact'} className="link">Contact Us</Link>
                    <Link to={'/shop'} className="link">Shop</Link>
                    <NavDropdown title="Services" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/rejuvenation">Rejuvenation &amp; Pain Relief Therapies </NavDropdown.Item>
                        <NavDropdown.Item href="/post_delivery_care">Pregnancy &amp; Post Delivery Care </NavDropdown.Item>
                        <NavDropdown.Item href="/panchakarma">Panchakarma</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/swarna_prashana">Swarna Prashana</NavDropdown.Item>
                        <NavDropdown.Item href="/yoga">Therapeutic Yoga </NavDropdown.Item>
                    </NavDropdown>
                </div>
                <div className="navbar__right">
                    <div className="cart__icon">
                        <p>0</p> &nbsp;
                        <a href='/cart'>
                            <RiShoppingCart2Fill/>
                            &nbsp;cart
                        </a>
                    </div>
                    <div className="account__info">
                        <NavDropdown title="Account" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/orders">My Orders</NavDropdown.Item>
                            {
                                isLoggedIn? <NavDropdown.Item onClick={signOut}>Sign Out</NavDropdown.Item>:
                                <NavDropdown.Item href="/sign_in">Sign In</NavDropdown.Item>
                            }
                        </NavDropdown>
                    </div>
                    <div className="navbar__mobile__icon" onClick={toggle}>
                        <RiMenu3Fill/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
