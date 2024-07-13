import './index.css'
import React, { useState, useEffect } from 'react';
import { Squash as HamburgerIcon } from 'hamburger-react';
import { motion } from 'framer-motion';
import logo from '../Images/logo.png'
import { IoMdClose } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseClick = () => {
    setIsOpen(false);
  };

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.links') === null && event.target.closest('.hamburger') === null) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside, { capture: true });
    } 
    
    else {
      document.removeEventListener('click', handleClickOutside, { capture: true });
    }

    return () => {
      document.removeEventListener('click', handleClickOutside, { capture: true });
    };
  }, [isOpen]);

  return (
    <div id="navbar">
        <img src={logo} alt="logo" className="logopicture"/>
       <ul className="navBar">
          <li><NavLink exact to="/" activeClassName="active" id="home">Home</NavLink></li>
          <li><NavLink to="/videos" activeClassName="active">Videos</NavLink></li>
          <li><NavLink to="/blogs" activeClassName="active">Blogs</NavLink></li>
          <li><NavLink to="/podcast" activeClassName="active">Podcast</NavLink></li>
          <li><NavLink to="/portfolios" activeClassName="active">Portfolios</NavLink></li>
        </ul>

        <div className='hamburger'>
            <HamburgerIcon toggled={isOpen} size={40} toggle={handleHamburgerClick} />
            {isOpen && (
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3 }}
                className="links"
            >
            <div className="back-button" onClick={handleCloseClick}>
                <IoMdClose size={40} />
            </div>
            <div className="hamburger-links">
                <span>Home</span>
                <span>Videos</span>
                <span>Blogs</span>
                <span>Poscast</span>
                <span>Portfolio</span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar