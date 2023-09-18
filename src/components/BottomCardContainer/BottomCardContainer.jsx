import React from 'react';
import './bottomcardcontainer.css'
import {MdOutlineArrowRightAlt} from 'react-icons/md'
import {BsCloudArrowUp} from 'react-icons/bs'
import {RxPerson} from 'react-icons/rx'
import {AiOutlineMail} from 'react-icons/ai'
import {TiTickOutline} from 'react-icons/ti'

function BottomCardContainer() {
  return (
    <div className='container-bottom'>
      <div className="card-item">
        <div className="left-card-box">
            <div className="forever">
                Free forever
            </div>
            <h1>Free Starter</h1>
            <p style={{fontSize:'small'}}>The quick and easiest way to try Protocloes with basic</p>

            <div className='leftbutton'>
                Get Started
                <MdOutlineArrowRightAlt/>
            </div>
        </div>
        <div className="right-card-box">
<p style={{fontSize:'12px'}}> what you will get:</p>
<div className='list'>
    <RxPerson/> Upto 8 Users
</div>
<div className='list'>
    <BsCloudArrowUp/> Upto 8Gb Storage
</div>
<div className='list'>
    <AiOutlineMail/>  Email Support
</div>
<div className='list'>
   <span style={{width:"20px"}}><TiTickOutline/></span>   You can customize the transition effect by changing the values of the transition CSS property.
</div>
        </div>
      </div>


      <div className="card-item">
        <div className="left-card-box">
            <div className="connect">
                Free forever
            </div>
            <h1>Enterprise Plan</h1>
            <p style={{fontSize:'small'}}>The quick and easiest way to try Protocloes with basic</p>

            <div className='rightbutton'>
                Get Started
                <MdOutlineArrowRightAlt/>
            </div>
        </div>
        <div className="right-card-box">
<p style={{fontSize:'12px'}}> what you will get:</p>
<div className='list'>
    <RxPerson/> Upto 75 Users
</div>

<div className='list'>
   <span style={{width:"20px"}}><TiTickOutline/></span>   You can customize the 
</div>
        </div>
      </div>
    </div>
  );
}

export default BottomCardContainer;