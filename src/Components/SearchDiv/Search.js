import React from 'react';
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsHouseDoor } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';

const Search = () => {
  return (
    <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
      <form action=''>
        {/* Search by name */}
        <div className='searchField flex gap-2 items-center'>
          <AiOutlineSearch className='text-[25px] icon' />
          <input
            type='text'
            className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
            placeholder='Search for universities, mentors, skills, activities...'
          />
          <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
        </div>

        {/* Search by major */}
        <div className='searchField flex gap-2 items-center'>
          <BsHouseDoor className='text-[25px] icon' />
          <input
            type='text'
            className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
            placeholder='Search by major...'
          />
          <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
        </div>

        {/* Search by location */}
        <div className='searchField flex gap-2 items-center'>
          <CiLocationOn className='text-[25px] icon' />
          <input
            type='text'
            className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
            placeholder='Search by location...'
          />
          <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
        </div>

        <button className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>
          Search
        </button>
      </form>

      {/* Filters */}
      <div className='secDiv flex items-center gap-10 justify-center'>
        {/* Sort by */}
        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor='relevance' className='text-[#808080] font-semibold'>
            Sort by:
          </label>
          <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
            <option value=''>Relevance</option>
            <option value=''>Inclusive</option>
            <option value=''>Starts with</option>
            <option value=''>Contains</option>
          </select>
        </div>

        {/* Search by type */}
        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor='type' className='text-[#808080] font-semibold'>
            Type:
          </label>
          <select name='' id='type' className='bg-white rounded-[3px] px-4 py-1'>
            <option value=''>Engineering</option>
            <option value=''>Pharmacy</option>
            <option value=''>Business</option>
            <option value=''>Architecture</option>
          </select>
        </div>

        {/* Year of study */}
        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor='level' className='text-[#808080] font-semibold'>
            Year of study:
          </label>
          <select name='' id='level' className='bg-white rounded-[3px] px-4 py-1'>
            <option value=''>Senior</option>
            <option value=''>Junior</option>
            <option value=''>Sophomore</option>
            <option value=''>Freshman</option>
            <option value=''>High School graduate</option>
          </select>
        </div>

        <span className='text-[#a1a1a1] cursor-pointer'>Clear All</span>
      </div>
    </div>
  );
};

export default Search;
