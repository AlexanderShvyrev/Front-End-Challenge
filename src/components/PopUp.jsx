import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import ProgressBars from './ProgressBars';
import styled from 'styled-components';
import Select from 'react-select';
import OptionForSelect from './OptionForSelect';
import Buttons from './Buttons';

const PopUp = () => {
  // These are options for the drop down menu. text, title, bgColor are coming from props.

  const menu = [
    {
      value: 'option1',
      label: (
        <OptionForSelect
          title='AS'
          text='1+1 digital innovation HAB'
          bgColor='bg-indigo-500'
        />
      ),
    },
    {
      value: 'option2',
      label: (
        <OptionForSelect
          title='IV'
          text='1+1 digital innovation HAB'
          bgColor='bg-green-500'
        />
      ),
    },
    {
      value: 'option3',
      label: (
        <OptionForSelect
          title='SV'
          text='1+1 digital innovation HAB'
          bgColor='bg-orange-500'
        />
      ),
    },
    {
      value: 'option4',
      label: (
        <OptionForSelect
          title='TG'
          text='1+1 digital innovation HAB'
          bgColor='bg-red-500'
        />
      ),
    },
  ];
  // sets selected option to the first item in drop down menu by default and then changes it according to selected by user option
  const [selected, setSelected] = useState(menu[0]);
  const handleChange = (selected) => {
    setSelected(selected);
  };

  return (
    <StyledPopup
      // this triggers pop up menu
      trigger={
        <button
          type='button'
          className='block text-indigo-500 border border-1 border-indigo-500 rounded-full w-12 h-12 m-2  content-center'
        >
          <svg className='h-6 w-6 fill-current m-auto' viewBox='0 0 24 24'>
            <path
              fillRule='evenodd'
              d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
            />
          </svg>
        </button>
      }
      modal
      closeOnDocumentClick
    >
      {/* this is responsible for the pop up menu closing  */}
      {(close) => (
        <>
          <div className='modal relative'>
            <a
              className='close absolute top-0 right-0 text-gray-400'
              onClick={close}
            >
              &times;
            </a>
            <div className='border-b pt-10 pb-3 px-3 bg-white'>Menu</div>
            {/* this is a drop down menu  */}
            <Select
              value={selected}
              onChange={handleChange}
              options={menu}
              styles={selectStyle}
              // this changes the color scheme of the selected/not selected value in the menu
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary25: '#c3dafe',
                  primary: '#7f9cf5',
                },
              })}
            />
            <Buttons
              position='flex flex-col mb-5 mx-auto px-2'
              firstTitle='Set Checkins'
              secondTitle='Add Member'
              thirdTitle='Edit Team'
            />
            <p className='uppercase text-gray-600 text-xs'>Team Statistics</p>
            {/* these are the progress bars displayed in a pop up menu */}
            <div className='grid grid-cols-1 px-3 py-5'>
              <ProgressBars />
            </div>
          </div>
        </>
      )}
    </StyledPopup>
  );
};

export default PopUp;

// this is a styling for the drop down menu itself
const selectStyle = {
  control: () => ({
    border: 'none',
    backgroundColor: 'white',
    display: 'flex',
    fontWeight: 'bold',
    padding: '10px 3px',
    borderBottom: '1px solid #e2e8f0',
    marginBottom: '3rem',
  }),
};

// this is a styling for the pop up menu that overwrites default styles from the package
const StyledPopup = styled(Popup)`
  &-content {
    width: 100% !important;
    height: 95% !important;
    border-radius: 5px;
    background-color: #f7fafc !important;
    overflow-y: auto;
  }
`;
