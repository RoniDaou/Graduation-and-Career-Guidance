import React from 'react';
import { Link } from 'react-router-dom';

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem] text-center'>

      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold max-w-[800px] mx-auto'>The Value that holds us true</h1>

      <div className='grid gap-[10rem] grid-cols-3 items-center'>

  <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
    <div className='flex items-center gap-3'>
      <div className='imgDic p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
        <img src="cont" alt='' className='w-[70%]'/>
      </div>
      <span className='font-semibold text-textColor text-[18px]'>
        Learning
      </span>
    </div>
    <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
    The beautiful thing about learning is that no one can take it away from you.
    </p>
  </div>

  <div className='singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]'>
    <div className='flex items-center gap-3'>
      <div className='imgDic p-[4px] rounded-[.8rem] bg-[#f7edf5] h-[40px] w-[40px] flex items-center justify-center'>
        <img src="cont" alt='' className='w-[70%]'/>
      </div>
      <span className='font-semibold text-textColor text-[18px]'>
      Mistakes
      </span>
    </div>
    <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
    A person who never made a mistake never tried anything new.
    </p>
  </div>

  <div className='singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]'>
    <div className='flex items-center gap-3'>
      <div className='imgDic p-[4px] rounded-[.8rem] bg-[#fcfae3] h-[40px] w-[40px] flex items-center justify-center'>
        <img src="cont" alt='' className='w-[70%]'/>
      </div>
      <span className='font-semibold text-textColor text-[18px]'>
        Simplicity
      </span>
    </div>
    <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
    You don’t have to be great to start, but you have to start to be great.
    </p>
  </div>

</div>

    </div>
  );
}

export default Value;
