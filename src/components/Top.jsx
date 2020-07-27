import React from 'react';
import PopUp from './PopUp';

const Top = () => {
  return (
    <>
      <header className='bg-white'>
        <div>
          <div className='flex justify-between items-center p-2 border border-b border-gray-300 md:hidden lg:hidden'>
            <PopUp />

            {/* LOGO for mobile query */}
            <h1 className='font-extrabold text-xl uppercase text-indigo-500 mt-2'>
              check <span className='text-green-300 uppercase'>in</span>
            </h1>

            {/* Profile image mobile query */}

            <img
              className='w-12 h-12 rounded-full'
              src='https://images.unsplash.com/profile-fb-1527368999-01bec71421e9.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128'
              alt='img'
            />
          </div>
        </div>
      </header>
      <nav className='sm:border border-b border-gray-300 flex items-center justify-between flex-wrap bg-white px-5 mb-12'>
        <div className='hidden lg:flex flex-shrink-0 text-white md:flex items-center flex-shrink-0 text-white'>
          <h1 className='font-extrabold text-xl uppercase text-indigo-500 m-0'>
            check <span className='text-green-300 uppercase'>in</span>
          </h1>
        </div>

        <div className='block flex-grow sm:flex sm:items-center sm:w-auto'>
          <div className='text-sm sm:flex-grow flex justify-center'>
            <a
              href='#'
              className='m-0 pt-4 pb-3 px-3 md:mt-2 text-gray-600 font-bold hover:text-indigo-500 mr-4 border-b-2 border-transparent hover:border-indigo-500 hover:no-underline'
            >
              Your Team
            </a>
            <a
              href='#'
              className='pt-4 pb-3 m-0 px-3 block md:mt-2 text-gray-600 font-bold hover:text-indigo-500 border-b-2 border-transparent hover:border-indigo-500 hover:no-underline'
            >
              Team Checkins
            </a>
          </div>
          <div className='hidden md:flex flex-wrap items-center lg:flex flex-wrap'>
            <div className=' w-40 text-gray-700 text-center  text-sm text-indigo-500'>
              Dwight Schrute
              <p className='text-gray-400 text-center text-xs m-0'>
                Programmer
              </p>
            </div>
            <div className='py-2'>
              <img
                className='w-12 h-12 rounded-full'
                src='https://images.unsplash.com/profile-fb-1527368999-01bec71421e9.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128'
                alt='img'
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Top;
