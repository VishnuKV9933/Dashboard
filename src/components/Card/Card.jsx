import React from 'react';
import './card.css'

import {MdOutlineArrowRightAlt} from 'react-icons/md'
import {BsCloudArrowUp} from 'react-icons/bs'
import {RxPerson} from 'react-icons/rx'
import {AiOutlineMail} from 'react-icons/ai'
import {BiSolidRightArrow} from 'react-icons/bi'

function Card({item}) {
  return (
    <div className='card'>
        <div style={{fontWeight:'bold',fontSize:'25px'}}>

     {item.Item}
        </div>
        <div style={{ fontSize: '12px', marginTop: '10px', position: 'relative' }}>
  {item.oldPrice}/mo
  <div style={{
    position: 'absolute',
    bottom: '100%',
    left: 0,
    width: '25%',
    height: '1px',
    backgroundColor: 'red',
    transform: 'rotate(10deg)',
    transformOrigin: 'left center',
  }} />
</div>


<div style={{backgroundColor:`${item.buttonColor}`}} className='startbutton'>
    Get Started
    <MdOutlineArrowRightAlt/>
</div>

<hr/>

<h6 style={{color:"black",fontWeight:"normal",marginTop:'20px'}}>What you will get:</h6>
<div className='list'>
<RxPerson/>
    <div>upto {item.users} &nbsp; Users</div>
</div>

<div className='list'>
<BsCloudArrowUp/>
    <div>upto {item.storage} &nbsp; Sto</div>
</div>

<div className='list'>
<AiOutlineMail/>
    <div>upto {item.support} &nbsp; Users</div>
</div>

<div className='explore'>Explore Features
<div style={{color:`${item.buttonColor}`}}>

<BiSolidRightArrow/>
</div>
</div>
    </div>
  );
}

export default Card;