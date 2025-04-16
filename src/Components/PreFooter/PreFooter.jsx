import React from 'react';
import "./PreFooter.css";

// {head,Content,Btn1,Btn2}
export const PreFooter = ({Head,Content,Btn1="Get Started",Btn2="Book A Meeting"}) => {
  return (
<>
<div className='PreFooter_Main'>
    <p className='Heading_PreFooter'>{Head}</p>
    <p className='Para_PreFooter'>{Content}</p>
    <div className='Buttons_Container'>
        <button className='Button1'>{Btn1}</button>
        <button className='Button22'>{Btn2}</button>
    </div>
</div>
</>
  )
}
