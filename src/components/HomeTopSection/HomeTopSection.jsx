import React from 'react';
import './hometopsection.css'
import CompanyName from '../CompanyName/CompanyName';
import logo from '../../Assets/logo.png'
function HomeTopSection() {
  return (
    <div className="top-secton">

    <div className="companylogo">
        <div className="log-container">
            <div className="img-before"></div>
            
      <img src={logo} alt="img" />
      <div className="img-after"></div>
      <div className="triangle"></div>
        </div>
    </div>

    <div className="companyName">
      <CompanyName />
    </div>
  </div>
  );
}

export default HomeTopSection;