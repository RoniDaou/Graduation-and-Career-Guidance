import React from 'react';
import { Link } from 'react-router-dom';
import './Info.css';
import img from '../../Assets/img.jpg';



const Info = () => {
  return (
    <div className='info-container'>
      <div className='info-content'>
        <h1 className='info-title'>Welcome to Your Learning Journey</h1>
        <p className='info-text'>
          You are here to improve yourself, and that's a wonderful journey.
          Embrace the challenges, celebrate the victories, and remember that
          growth comes from continuous effort and learning. You have the
          potential to achieve great things, so keep striving for excellence.
        </p>
        <p className='info-text'>
          "A little progress each day adds up to big results."
        </p>
        <h2 className='info-title'>Ready to fly?</h2>
        <h3>Let's get started</h3>
        <p className='info-text' style={{ marginBottom: '0px' }}>
        <Link to="/login">
            <button className='border-[2px] rounded-[10px] py-[9px] px-[100px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor'>
            Get started
            </button>
        </Link>
</p>

        
      </div>
      <img src={img} alt="Description" className="info-image" />
    </div>
  );
};

export default Info;
