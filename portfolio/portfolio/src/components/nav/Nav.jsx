import React from 'react';
import logo from '../../img/logo.svg';
import hamburger from '../../img/hamburger.svg';
import close from '../../img/close.svg';
import Btn from '../btn/Btn';


export default function Nav({ toggle, toggleMenu}) {
    
  return (
    <nav className=' relative container '>
    <div className='navContainer  flex items-center justify-between py-[30px] md:py-[45px]  '>
        <div className="logo cursor-pointer relative z-[90]"><img className='w-[40px]' src={logo} alt="" /></div>
        <div className="links z-40">
        <ul className={toggle?'hidden bg-[white] md:bg-opacity-0  flex-col items-start  gap-[20px] absolute top-0 left-0 right-0 pt-[128px] pb-[44px]  md:flex md:gap-[30px] md:flex-row md:relative md:p-0':' flex flex-col items-start  gap-[20px] bg-[white] absolute top-0 left-0 right-0 pt-[128px] pb-[44px]  md:flex md:gap-[30px] md:flex-row md:relative md:p-0'}>
                
                <li className='text-left  text-primary font-medium border-b-[0.2px] border-opacity-[0.3] border-lightprim pb-[20px] w-[100%]  hover:border-b-primary hover:w-[80%] ease-in-out duration-300 
                md:border-b-0 md:pb-0'><a className=' ml-[40px]  ' href="#">About</a></li>
                <li className='text-left  text-primary font-medium border-b-[0.2px] border-opacity-[0.3] border-lightprim pb-[20px] w-[100%]  hover:border-b-primary hover:w-[80%] ease-in-out duration-300 
                md:border-b-0 md:pb-0'><a className=' ml-[40px]  ' href="#">Experience</a></li>
                <li className='text-left  text-primary font-medium border-b-[0.2px] border-opacity-[0.3] border-lightprim pb-[20px] w-[100%]  hover:border-b-primary hover:w-[80%] ease-in-out duration-300 
                md:border-b-0 md:pb-0'><a className= ' ml-[40px]   ' href="#">Projects</a></li>
                <li className='text-left  text-primary font-medium border-b-[0.2px] border-opacity-[0.3] border-lightprim pb-[20px] w-[100%]  hover:border-b-primary hover:w-[80%] ease-in-out duration-300 
                md:border-b-0 md:pb-0'><a className=' ml-[40px]  ' href="#">Resume</a></li>
                
                <div className="hello scale-[0.8] ml-[20px] mt-[20px] md:hidden">
                {/* <button className='btn-small  hover:bg-secondary hover:text-primary duration-300 ease-in-out' >Say hello!</button> */}
            <Btn/>
            </div>
            </ul>   
       
        </div>
        <div className="toggles md:hidden relative  z-[290]"   onClick={toggleMenu}  >
        {toggle?
        <img className='md:hidden w-[28px]  cursor-pointer'  src={hamburger} alt="hamburger" />:
         <img className='md:hidden w-[25px]  cursor-pointer'  src={close} alt="close-menu" />}
    </div>
    </div>
   
    </nav>
    
  )
}