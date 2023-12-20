


import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/logo.jpg';
import { UserContext } from "../../App";

const NavBar = () => {

  const{state, dispatch} = useContext(UserContext);
  const navigate = useNavigate();
  const hexCode = '#1976d2';
  const hexCodeText = '#fff';

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleLogout = async () => {
    dispatch({ type: "USER", payload: false });
    navigate('/Home');
  };

  const renderMenu = () => {
    if (state.isAuthenticated) {
      return (
        <>
        <div className='navBar flex justify-between items-center p-6' style={{ background: hexCode, width: '100%' }}>
          <div className='menu flex gap-8'>
            <span className='menuList text-[#6f6f6f] hover:text-blueColor cursor-pointer' style={{ color: hexCodeText }}>
              <img src={logo} style={{ maxWidth: '30px', maxHeight: '30px' }} alt="Logo" />
            </span>
            <Link to="/" className='menuList text-[#6f6f6f] hover:text-blueColor' style={{ color: hexCodeText, textDecoration: 'none' }}>
              Home
            </Link>
            <Link to="/Universities" className='menuList text-[#6f6f6f] hover:text-blueColor' style={{ color: hexCodeText, textDecoration: 'none' }}>
              Universities
            </Link>
            <Link to="/Skills" className='menuList text-[#6f6f6f] hover:text-blueColor' style={{ color: hexCodeText, textDecoration: 'none' }}>
              Skills
            </Link>
            <Link to="/Activities" className='menuList text-[#6f6f6f] hover:text-blueColor' style={{ color: hexCodeText, textDecoration: 'none' }}>
              Activities
            </Link>
            <Link to="/Scholarships" className='menuList text-[#6f6f6f] hover:text-blueColor' style={{ color: hexCodeText, textDecoration: 'none' }}>
              Scholarships
            </Link>
            <Link to="/Mentor" className='menuList text-[#6f6f6f] hover:text-blueColor' style={{ color: hexCodeText, textDecoration: 'none' }}>
              Mentorship
            </Link>
          </div>
    
          <div className="searchBar" style={{ color: 'white', padding: '10px', borderRadius: '8px' }}>
            <input
              type="text"
              placeholder="Search..."
              style={{ paddingLeft: '5px', marginRight: '8px', color: '#2196f3', border: 'none', outline: 'none' }}
            />
            <button onClick={handleLoginClick}>Search</button>
          </div>
    
          <div className='menu flex gap-8'>
            <span
              className='menuList text-[#6f6f6f] hover:text-blueColor cursor-pointer'
              onClick={handleLogout}
              style={{ color: hexCodeText }}
            >
              Logout
            </span>
          
          </div>
        </div>
      </>
      );
    } else {
      return (
        <>
        <div className='navBar flex justify-between items-center p-6' style={{ background: hexCode, width: '100%' }}>
          <div className='menu flex gap-8'>
            <span className='menuList text-[#6f6f6f] hover:text-blueColor cursor-pointer' style={{ color: hexCodeText }}>
              <img src={logo} style={{ maxWidth: '30px', maxHeight: '30px' }} alt="Logo" />
            </span>
            <Link to="/" className='menuList text-[#6f6f6f] hover:text-blueColor' style={{ color: hexCodeText, textDecoration: 'none' }}>
              Home
            </Link>
            <Link to="/Universities" className='menuList text-[#6f6f6f] hover:text-blueColor' style={{ color: hexCodeText, textDecoration: 'none' }}>
              Universities
            </Link>
            <Link to="/Skills" className='menuList text-[#6f6f6f] hover:text-blueColor' style={{ color: hexCodeText, textDecoration: 'none' }}>
              Skills
            </Link>
            <Link to="/Activities" className='menuList text-[#6f6f6f] hover:text-blueColor' style={{ color: hexCodeText, textDecoration: 'none' }}>
              Activities
            </Link>
            <Link to="/Scholarships" className='menuList text-[#6f6f6f] hover:text-blueColor' style={{ color: hexCodeText, textDecoration: 'none' }}>
              Scholarships
            </Link>
            <Link to="/Mentor" className='menuList text-[#6f6f6f] hover:text-blueColor' style={{ color: hexCodeText, textDecoration: 'none' }}>
              Mentorship
            </Link>
          </div>
    
          <div className="searchBar" style={{ color: 'white', padding: '10px', borderRadius: '8px' }}>
            <input
              type="text"
              placeholder="Search..."
              style={{ paddingLeft: '5px', marginRight: '8px', color: '#2196f3', border: 'none', outline: 'none' }}
            />
            <button onClick={handleLoginClick}>Search</button>
          </div>
    
          <div className='menu flex gap-8'>
            <span
              className='menuList text-[#6f6f6f] hover:text-blueColor cursor-pointer'
              onClick={handleLoginClick}
              style={{ color: hexCodeText }}
            >
              Login
            </span>
            <span
              className='menuList text-[#6f6f6f] hover:text-blueColor cursor-pointer'
              onClick={handleSignUpClick}
              style={{ color: hexCodeText }}
            >
              Register
            </span>
          </div>
        </div>
      </>
      );
    }
  };

  return (
    <>
      {renderMenu()}
    </>
  );
};

export default NavBar;
