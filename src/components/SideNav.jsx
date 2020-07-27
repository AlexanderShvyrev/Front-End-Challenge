import React from 'react';
import NavButton from './NavButton';

const SideNav = () => {
  return (
    <div className='flex lg:flex-col bg-blue-900 w-16 h-full md:flex-col bg-blue-900 w-8 h-full'>
      <NavButton bgrColor='bg-indigo-500' navText='GO' />
      <NavButton bgrColor='bg-green-500' navText='AS' />
      <NavButton bgrColor='bg-orange-500' navText='IV' />
      <NavButton bgrColor='bg-blue-300' navText='SV' />
      <a
        href='#'
        className='h-10 w-10  rounded-md border-dotted border-2 border-transparent hover:border-gray-100 border-gray-600 text-gray-600 text-center text-lg pt-1 my-3 mx-auto hover:text-white'
      >
        +
      </a>
    </div>
  );
};

export default SideNav;
