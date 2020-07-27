import React from 'react';
import FilterLink from './FilterLink';
import Divider from './Divider';

const Filters = () => {
  return (
    <div className='mb-5 xl:flex flex-row lg:grid grid-cols-2'>
      {/* first set of filters */}
      <div className='hidden border-solid border border-gray-200 mr-1 rounded block flex justify-evenly flex-grow md:mb-1 sm:flex sm:items-center sm:w-auto bg-white'>
        <FilterLink linkText='all' />
        <Divider />
        <FilterLink linkText='e-blocker' />
        <Divider />
        <FilterLink linkText='completed' />
        <Divider />
        <FilterLink linkText='not completed' />
        <Divider />
        <FilterLink linkText='no check ins' />
      </div>

      {/* second set of filters */}

      <div className='hidden border-solid border border-gray-200 mr-1 rounded block md:mb-1 flex justify-evenly flex-grow  sm:flex sm:items-center sm:w-auto bg-white'>
        <FilterLink linkText='all' />
        <Divider />
        <FilterLink linkText='team checkins' />
        <Divider />
        <FilterLink linkText='individual checkin' />
        <Divider />
        <FilterLink linkText='turn off checkin' />
      </div>

      {/* search bar */}

      <form className='m-0 w-2/3 md:w-1/2 md:text-xxs lg:w-1/2 xl:w-auto'>
        <div className='flex flex-row items-center max-w-sm'>
          <input
            className='appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='search'
            id='xsearch'
            name='xsearch'
            placeholder='Search...'
          />
          <button className='bg-transparent hover:bg-indigo-500 hover:text-white ml-2 text-indigo-700 text-xs py-2 px-4 my-2 border border-solid border-indigo-500 rounded lg:hidden md:hidden xl:hidden'>
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filters;
