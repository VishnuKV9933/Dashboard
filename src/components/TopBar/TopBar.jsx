import React, { useState } from 'react';
import './Topbar.css'
import logo from '../../Assets/logo.png'
import {AiOutlineMenu}from 'react-icons/ai'
import CompanyName from '../CompanyName/CompanyName';
import ToggleItems from '../Toggle-Items/ToggleItems';


function TopBar() {
    const [toggleOpen,setToggleOppen]=useState(false)
  return (
    <>
    <div className='container'>
        <div className='logo-section'>
      <img id='logo' src={logo} alt="img" />
        </div>

        <div className='center'>
            <CompanyName/>
        </div>

      <div
      onClick={()=>setToggleOppen(!toggleOpen)}
      className='menu'>
        <AiOutlineMenu/>
      </div>
    </div>
    <>
    {
    toggleOpen&&
    <div className='transition-div '  >
    <ToggleItems  setopen={setToggleOppen}/>
    </div>
    }
    </>
    </>
  );
}

export default TopBar;