import React from 'react'
import {useState, useEffect} from 'react'
import { logo } from '../assets';
import { navLinks } from '../constants';
import { Link } from "react-scroll";
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true)
const handleScroll = () => {
    const currentScrollPos = window.scrollY

    if(currentScrollPos > prevScrollPos){
        setVisible(false)
    }else{
        setVisible(true)
    }

    setPrevScrollPos(currentScrollPos)
}

useEffect( () => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
})

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='hero' className='logo object-fit: cover'>
                    <img src={logo} alt='logo' />
                    <p class="positioned" className="flex-1 font-poppins text-[12px] text-brown opacity-80 mt-1">Tel: 30 52 87 41</p>
                    <p className="flex-1 font-poppins text-[12px] text-brown opacity-80">janriaps@gmail.com</p>
                </a>

                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#c59c79' }} />)
                        : (<FaBars size={30} style={{ color: '#c59c79' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Hjem</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="services" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Ydelser</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="kurser" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Kurser</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="om" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>Om</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="kontakt" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Kontakt</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar