import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import './Footer.css';
import About from './About';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

const handleNavigation = () => {
  navigate('./About');
};

  return (
    <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-start justify-center'> 
      <div>
        <div className='logoDiv'>
          <h1 className="logo text-[25px] text-white pb-[1.5rem]">
            <strong>Search</strong>
          </h1>
        </div>
        <p className='text-white pb-[13px] opacity-70 leading-7'>
          We always try to find the best opportunities for our best candidates!
        </p>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Contact us
        </span>
        <div className=''>
          <small className='text-[14px] text-white'>
            roni.daou@lau.edu

            joya.sakr@lau.edu

          </small>
          
        </div>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          About us
        </span>
        <span
          className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white cursor-pointer'
          onClick={handleNavigation}
        >
          Press to know more about us
        </span>
      </div>
      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Address
        </span>
        <div className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Lebanese American University, Jbeil Campus</li>
        </div>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Social Media
        </span>
        <div className='icons flex gap-4 py-[1rem]'>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <div className='icon-bg'>
              <AiFillInstagram className='icon' />
            </div>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <div className='icon-bg'>
              <FaFacebook className='icon' />
            </div>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <div className='icon-bg'>
              <AiOutlineTwitter className='icon' />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
