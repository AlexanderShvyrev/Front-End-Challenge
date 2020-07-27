import React from 'react';

// these are the options for the drop down menu

const OptionForSelect = ({ title, text, bgColor }) => {
  return (
    <div className='flex flex-row'>
      <div
        className={`border border-gray-300 text-white h-8 w-8 uppercase rounded-md ${bgColor} p-2 text-center text-xxs mr-1`}
      >
        {title}
      </div>
      <div>{text}</div>
    </div>
  );
};

export default OptionForSelect;
