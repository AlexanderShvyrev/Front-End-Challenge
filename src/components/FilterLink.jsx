import React from 'react';

const FilterLink = ({ linkText }) => {
  return (
    <>
      <a
        href='#'
        className='text-xs flex justify-center block text-center mx-1 text-gray-600 md:text-xxs hover:bg-gray-300 hover:text-indigo-500 uppercase p-2 hover:border rounded hover:no-underline'
      >
        {linkText}
      </a>
    </>
  );
};

export default FilterLink;
