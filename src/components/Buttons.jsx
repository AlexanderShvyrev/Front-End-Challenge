import React from 'react';

const Buttons = ({ firstTitle, secondTitle, thirdTitle, position }) => {
  return (
    <div className={`${position}`}>
      <button className='bg-transparent hover:bg-indigo-500 text-indigo-700 text-xs hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded m-1'>
        <i className='fas fa-bell'></i> {firstTitle}
      </button>
      <button className='bg-indigo-500 text-white text-xs hover:text-white py-2 px-4 border border-indigo-500 hover:bg-white hover:text-indigo-500 rounded m-1'>
        <i className='fas fa-user-alt'></i> {secondTitle}
      </button>
      <button className='bg-indigo-500 text-white text-xs py-2 px-4 border border-indigo-500 hover:bg-white hover:text-indigo-500 rounded m-1'>
        <i className='fas fa-pen'></i> {thirdTitle}
      </button>
    </div>
  );
};

export default Buttons;
