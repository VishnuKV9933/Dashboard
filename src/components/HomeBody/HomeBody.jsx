import React from 'react';
import './homebody.css'
import SideBar from '../SideBar/Sidebar';
import DashBoard from '../DashBoard/DashBoard';

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
      <div className='side-section'>dfdfd</div>
    </div>
  );
}

export default HomeBody;