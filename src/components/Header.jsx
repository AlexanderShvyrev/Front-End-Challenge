import React from 'react';
import Buttons from './Buttons';

const Header = () => {
  return (
    <div className='hidden md:flex items-center justify-between flex-wrap lg:flex items-center justify-between flex-wrap xl:flex items-center justify-between flex-wrap mb-12'>
      <div className='flex items-center flex-shrink-0  mr-3'>
        <a
          href='#'
          className='text-white text-sm h-10 w-10 uppercase rounded-md bg-indigo-500 p-2 border-2 border-transparent hover:border-indigo-500 hover:no-underline hover:bg-gray-100 hover:text-indigo-500'
        >
          Go
        </a>
        <div className='flex flex-col items-center mx-3'>
          <h1 className='font-extrabold text-xl text-gray-800'>
            Digital your team
          </h1>
          <p className='text-gray-500 text-xs pr-5'>All members of your team</p>
        </div>
      </div>
      <Buttons
        position='flex items-center'
        firstTitle='Set Checkins'
        secondTitle='Add Member'
        thirdTitle=''
      />
    </div>
  );
};

export default Header;
