import React, { useState, useRef } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
//  // Intentionally throw an error to test the ErrorBoundary
//     throw new Error("Test error in Navbar component");
    const [menu, setMenu] = useState('home');
    const menuRef= useRef();

    const openMenu = () => {
        menuRef.current.style.right='0'
    }

    const closeMenu = () => {
        menuRef.current.style.right='-350px'
    }

    return (
        <div className='navbar'>

            <h2>Hamza Sheikh</h2>
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mov-open' />

            <ul ref={menuRef} className='nav-menu'>
                <img src={menu_close} alt="" onClick={closeMenu} className='nav-mob-close' />
                <li><AnchorLink className='anchor-link' href='#home'> <p onClick={() => setMenu('home')} >Home</p>{menu === 'home' ? <img src={underline} alt="underline" /> : <></>}</AnchorLink></li>
                <li> <AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu('about')}>About me</p>{menu === 'about' ? <img src={underline} alt="underline" /> : <></>}</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu('services')}>Services</p>{menu === 'services' ? <img src={underline} alt="underline" /> : <></>}</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu('work')}>Portfolio</p>{menu === 'work' ? <img src={underline} alt="underline" /> : <></>}</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu('contact')}>Contact</p>{menu === 'contact' ? <img src={underline} alt="underline" /> : <></>}</AnchorLink></li>
            </ul>
            <div className="nav-connect-btn"> <AnchorLink style={{ textDecoration: 'none', color: 'white' }} className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu('contact')}></p>{menu === 'contact' ? <img src={underline} alt="underline" /> : <></>}Connect With Me</AnchorLink></div>

        </div>
    )
}

export default Navbar
