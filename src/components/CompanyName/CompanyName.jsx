import React from 'react';
import './CompanyName.css'
import  company from '../../Assets/Company.png'

import {IoIosArrowDown} from 'react-icons/io'

function CompanyName() {
  return (
    <>
        <div className='company-name'>
            <img className='logo' src={company} alt="img" />
            <>xyz Enterprises Pvt.Ltd</>
        </div>
        <div className='company-name-menu'>
            <IoIosArrowDown/>
        </div>
    </>
  );
}

export default CompanyName;