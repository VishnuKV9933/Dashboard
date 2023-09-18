import React from 'react';
import './homebody.css'
import SideBar from '../SideBar/Sidebar';
import DashBoard from '../DashBoard/DashBoard';
import {BsPlus} from 'react-icons/bs'
import {IoIosNotifications} from 'react-icons/io'

function HomeBody() {
  return (
    <div className='container-home-body'>
      <div className='main-section'>
        <div className='sideBar'>
        <SideBar/>
        </div>
        <div className='dashboard'>
        <DashBoard/>
        </div>
      </div>
      <div className='side-section'>
        <div>
          <div className='notification'>
            <div className='bellcontainer'>
              <IoIosNotifications/>
              <div className='notification-count'> 3</div>
            </div>
          </div>
          <div className='plus'>
            <div className="bottombar"></div>
            <div className='plusIcon'>
            <BsPlus/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBody;