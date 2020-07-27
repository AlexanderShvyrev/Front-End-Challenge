import React from 'react';

const NavButton = ({ navText, bgrColor }) => {
  return (
    <>
      <a
        href='#'
        className={`text-white h-10 w-10 mx-auto mt-3 uppercase rounded-md ${bgrColor} p-2 text-center text-sm border-2 border-transparent hover:border-gray-100 hover:no-underline`}
      >
        {navText}
      </a>
    </>
  );
};

export default NavButton;
