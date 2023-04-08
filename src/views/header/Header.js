import React from 'react';
import logo from '../../assets/YT.png';
import MobileLogo from '../../assets/whitelogo.png';
import { AiOutlineSearch } from 'react-icons/ai';
import './header.css';

function Header({onSearchChange}) {
    return (
      <div className="main-nav">
        <div className="main-nav__logo">
            <img id="desktop__logo" src={logo} alt="youtube logo"/>
            <img id="mobile__logo" src={MobileLogo} alt="youtube logo"/>
        </div>
        <div className="main-nav__item">
            <input type="text" onChange={onSearchChange}></input>
            <button type="button" className='button-mobile'><AiOutlineSearch /></button>
        </div>
      </div>
    );
  }
  
  export default Header;
  