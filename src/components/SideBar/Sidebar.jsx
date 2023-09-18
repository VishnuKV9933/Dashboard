import React, { useState } from "react";
import "./sidebar.css";
import image from "../../Assets/profile.jpeg";
import dashboard from "../../Assets/dashboard.png";
import perks from "../../Assets/perks.png";
import addons from "../../Assets/addons.png";
import faq from "../../Assets/faq.png";
import support from "../../Assets/support.png";
import {AiOutlinePoweroff} from 'react-icons/ai'

import { RiArrowRightSLine } from "react-icons/ri";
function SideBar() {
    const [currentNavigation,setCurrentNavigation]=useState('dashboard')
    const [preNavigation,setPreviousNavigation]=useState('dashboard')
    
    const navObject={
        dashboard:true,
        perks:false,
        addons:false,
        faq:false,
        support:false
    }
    function navigate(object,previous){

      
        navObject[object]=true
        setPreviousNavigation(currentNavigation)
        navObject[previous]=false
        setCurrentNavigation(object)
     
    }
   

  return (
    <div className="sidebar-container">

     {/* profile box */}
      <div className="profile-box">
        <div className="image-container">
          <img src={image} alt="" />
        </div>
        <div className="name-container">
          <div className="name">Vishnu KV</div>
          <div className="arrow">
            <RiArrowRightSLine />
          </div>
        </div>
        <div className="email">vishnukv@gmail.com</div>
      </div>
    {/* profile box end */}

    <div className='navigation'>
        <div onClick={(e)=>{
            navigate('dashboard',preNavigation)
            e.stopPropagation()
            }} className={navObject['dashboard'] ? "nav-items current" : "nav-items"}>
            <img src={dashboard} alt="" />
            DashBoard
        </div>
        <div  onClick={(e)=>{navigate('perks')
    e.stopPropagation()}} className="nav-items">
            <img src={perks} alt="" />
            Perks
        </div>
        <div onClick={(e)=>{navigate('addons',preNavigation)
        e.stopPropagation()
    }} className="nav-items">
        <img src={addons} alt="" />
        Addons
        </div>
        <div onClick={(e)=>{navigate('faq',preNavigation)
    e.stopPropagation()}} className="nav-items">
        <img src={faq} alt="" />
            FAQ
        </div>
        <div onClick={(e)=>{navigate('support',preNavigation)
    e.stopPropagation()
    }} className="nav-items">
        <img src={support} alt="" />
        Support
        </div>
    </div>
    <div className="logout">
        Logout
    <AiOutlinePoweroff/>
    </div>
    </div>
  );
}

export default SideBar;
