import React from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBars = ({ visibility }) => {
  // these are the variables for progress bars
  const mood = 50;
  const involvement = 88;
  const blocker = 37;
  const feeling = 56;

  return (
    <div
      className={`${visibility} lg:flex flex-row justify-around mb-5 bg-white py-5 md:grid grid-cols-3 px-10`}
    >
      <div className='h-40 w-40 mx-auto'>
        <CircularProgressbarWithChildren
          value={mood}
          circleRatio={0.75}
          // progress bars styles
          styles={buildStyles({
            rotation: 1 / 2 + 1 / 8,
            strokeLinecap: 'rounded',
            trailColor: '#eee',
            pathColor: `rgba(102, 126, 234, ${mood / 100})`,
          })}
        >
          <p className='text-gray-400'>%</p>
          <h1 className='text-3xl text-indigo-500'>{mood}</h1>
          <h3 className='text-sm text-indigo-800'>Average mood</h3>
        </CircularProgressbarWithChildren>
      </div>
      <div className='h-40 w-40 mx-auto'>
        <CircularProgressbarWithChildren
          value={involvement}
          circleRatio={0.75}
          // progress bars styles
          styles={buildStyles({
            rotation: 1 / 2 + 1 / 8,
            strokeLinecap: 'rounded',
            trailColor: '#eee',
            pathColor: `rgba(104, 211, 145, ${involvement / 100})`,
          })}
        >
          <p className='text-gray-400'>%</p>
          <h1 className='text-3xl text-green-400'>{involvement}</h1>
          <h3 className='text-sm text-indigo-800'>Involvement</h3>
        </CircularProgressbarWithChildren>
      </div>
      <div className='h-40 w-40 mx-auto'>
        <CircularProgressbarWithChildren
          value={blocker}
          circleRatio={0.75}
          // progress bars styles
          styles={buildStyles({
            rotation: 1 / 2 + 1 / 8,
            strokeLinecap: 'rounded',
            trailColor: '#eee',
            pathColor: `rgba(245, 101, 101, ${blocker / 100})`,
          })}
        >
          <p className='text-gray-400'>%</p>
          <h1 className='text-3xl text-red-500'>{blocker}</h1>
          <h3 className='text-sm text-indigo-800'>Blocker</h3>
        </CircularProgressbarWithChildren>
      </div>
      <div className='h-40 w-40 mx-auto'>
        <CircularProgressbarWithChildren
          value={feeling}
          circleRatio={0.75}
          // progress bars styles
          styles={buildStyles({
            rotation: 1 / 2 + 1 / 8,
            strokeLinecap: 'rounded',
            trailColor: '#eee',
            pathColor: `rgba(255, 171, 69, ${feeling / 100})`,
          })}
        >
          <p className='text-gray-400'>%</p>
          <h1 className='text-3xl text-orange-500'>{feeling}</h1>
          <h3 className='text-sm text-indigo-800'>Health</h3>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default ProgressBars;
