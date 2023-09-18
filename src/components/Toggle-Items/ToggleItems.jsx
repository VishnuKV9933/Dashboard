import React from 'react';
import './Toggleitems.css'

function ToggleItems({setopen}) {
  return (
    <div onClick={()=>setopen()} className='toggle-container'>
     <div className='items'>Dashnboard</div>
     <div className='items'>Perks</div>
     <div className='items'>Addons</div>
     <div className='items'>FAQ</div>
     <div className='items'>Support</div>
     <div className='items'>Notificaion</div>
     <div className='items'>Logout</div>
    </div>
  );
}

export default ToggleItems;