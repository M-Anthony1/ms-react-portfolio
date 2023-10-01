import React from 'react';

// import { FaLinkedin, FaGithub, FaArrowDown } from 'react-icons/fa';
import {AiFillLinkedin, AiFillGithub, AiOutlineArrowDown} from "react-icons/ai"
import avatar from '../assets/AvatarMaker2.svg';


const Hero = () => {

  window.addEventListener('scroll', function() {
    const downArrow = document.querySelector('.down-arrow')

    if(this.scrollY >= 2) downArrow.classList.add('hide-down-arrow')
    else downArrow.classList.remove("hide-down-arrow")
  });



  return (
  
    <section  name="HOME" className=" bg-gradient-to-t from-indigo-200 to-white min-h-screen flex flex-col justify-start items-center mt-10 p-10 text-center">
      
      <h2 className="text-5xl py-2 mt-9 text-indigo-500 font-medium">Hi, I'm Marco</h2>
      <h3 className='text-2xl font-bold py-2'>Full-Stack Developer</h3>
      <p className="text-md py-5 font-light leading-8">
       
     I'm on a mission to create absorbing and enchanting <br></br> user experiences that truly shine. ✨
      </p>

      <div className="text-5xl flex justify-center gap-10 py-7 text-gray-600">
        <a href ="https://linkedin.com/in/marco-schiralli-profile" target="_blank" rel="noopener noreferrer" className='cursor-pointer duration-300 hover:text-indigo-500'>
          {<AiFillLinkedin/>}
        </a>
        <a href ="https://github.com/M-Anthony1" target="_blank" rel="noopener noreferrer" className='cursor-pointer duration-300 hover:text-indigo-500'>
          {<AiFillGithub/>}
        </a>
      </div>

      {/* avatar and resume */}
      <div className="mx-auto">
        <img src={avatar}
        alt="avatar"
        className="rounded-full w-80 h-80"/>


      {/* TODO:RESUME PDF LINK FROM PUBLIC */}

        
        <a href="MarcoSchiralli_Resume.pdf" download={true} className="my-8 uppercase flex hover:scale-105 duration-200 px-6 py-3 items-center shadow-lg justify-center mt-4 bg-black text-white py-2 rounded-lg">
        Resume
       </a>
     
      </div>

      <div className="mt-10 down-arrow">
              {/* arrow down animation */}

      <AiOutlineArrowDown className="text-gray-400 text-2xl animate-bounce" />

      </div>
    
    </section>
  );
};

export default Hero;
