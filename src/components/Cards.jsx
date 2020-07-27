import React from 'react';

const Cards = () => {
  const people = [
    {
      _id: '1',
      name: 'Dwight Schrute',
      image: 'https://apprecs.org/ios/images/app-icons/256/3f/403072575.jpg',
      position: 'Assistant',
    },
    {
      _id: '2',
      name: 'Michael Scott',
      image:
        'https://pbs.twimg.com/profile_images/378800000007021918/22f4940596f62f0075e1cf5f0e59496a.jpeg',
      position: 'Manager',
    },
    {
      _id: '3',
      name: 'Pam Beasley',
      image:
        'https://pm1.narvii.com/6697/cbaef18d49deb531dbfd1e505ed70f096ade028e_128.jpg',
      position: 'Secretary',
    },
    {
      _id: '4',
      name: 'Jim Halpert',
      image:
        'https://pbs.twimg.com/profile_images/703059302613917696/S75DVWWF.jpg',
      position: 'Sales',
    },
    {
      _id: '5',
      name: 'Andy Bernard',
      image:
        'https://ih1.redbubble.net/image.1264767878.6289/flat,128x128,075,t.u1.jpg',
      position: 'Sales',
    },
  ];
  return (
    <div className='mb-5 grid gap-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
      {people.map((item, key) => {
        return (
          <div
            key={item._id}
            className='max-w-sm relative rounded overflow-hidden shadow-sm p-3 pt-5 bg-white'
          >
            <span className='absolute text-gray-300 border border-gray-300 top-0 right-0 px-1 m-2'>
              <i className='fa fa-bell'></i>
            </span>
            {/* card image */}

            <div className='relative h-20 w-20  mx-auto'>
              <img className='block rounded-full' src={item.image} alt='img' />
              {/* Icons */}
              <a href='#'>
                <div className='grid grid-cols-2 gap-1'>
                  <span
                    role='img'
                    className='rounded-full absolute top-0 left-0'
                  >
                    &#128276;
                  </span>
                  <span
                    role='img'
                    className='rounded-full absolute top-0 right-0'
                  >
                    &#128513;
                  </span>
                  <span
                    role='img'
                    className='rounded-full absolute bottom-0 right-0'
                  >
                    &#9940;
                  </span>
                  <span
                    role='img'
                    className='rounded-full absolute left-0 bottom-0'
                  >
                    &#128037;
                  </span>
                </div>
              </a>
            </div>

            {/* card text */}

            <div className='px-6 py-4 text-center'>
              <div className='text-indigo-500 font-bold mx-auto'>
                {item.name}
              </div>
              <p className='text-gray-500 font-hairline text-base'>
                {item.position}
              </p>
            </div>

            {/* card info */}

            <div className='grid grid-cols-2'>
              <span className='inline-block bg-gray-200 text-center relative p-1 text-lg text-orange-500 text-gray-700 m-2 p-3'>
                88
                <i className='fa fa-heartbeat text-gray-400 text-sm absolute top-1 right-1'></i>
                <p className='text-gray-500 text-xs m-0'>Health</p>
              </span>
              <span className='inline-block bg-gray-200 text-center relative p-1 text-lg text-green-500 text-gray-700 m-2 p-3'>
                88
                <i className='fa fa-percent text-gray-400 text-sm absolute top-1 right-1'></i>
                <p className='text-gray-500 text-xs'>Involvement</p>
              </span>
              <span className='inline-block bg-gray-200 text-center relative p-1 text-lg text-indigo-500 text-gray-700 m-2 p-3'>
                88
                <i className='fa fa-percent text-gray-400 text-sm absolute top-1 right-1'></i>
                <p className='text-gray-500 text-xs'>Blocker</p>
              </span>
              <span className='inline-block bg-gray-200 text-center relative p-1 text-lg text-red-500 text-gray-700 m-2 p-3'>
                88
                <i className='fa fa-percent text-gray-400 text-sm absolute top-1 right-1'></i>
                <p className='text-gray-500 text-xs'>Mood</p>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
