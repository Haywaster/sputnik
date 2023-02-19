import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { timesOfDay } from '../hooks/useWeatherInfo';

let bgColor = '';
let textColor = '';

switch (timesOfDay) {
  case 'morning':
    textColor = 'text-black';
    bgColor = 'bg-yellow-200';
    break;
  case 'day':
    textColor = 'text-black';
    bgColor = 'bg-yellow-300';
    break;
  case 'evening':
    textColor = 'text-gray-300';
    bgColor = 'bg-blue-900';
    break;
  case 'night':
    textColor = 'text-gray-300';
    bgColor = 'bg-gray-800';
    break;
  default:
    textColor = 'text-black';
    bgColor = 'bg-yellow-200';
    break;
}

let pages = ['Погода', 'Фотогалерея'];
let ways = ['/', '/photo'];

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(
    ways.findIndex(el => el === window.location.pathname)
  );

  return (
    <header
      className={`flex justify-between items-center h-[9%] px-[1.5vw] ${bgColor} rounded mb-[1vw] ${textColor}`}>
      <a
        href='https://vk.com/haywaster02'
        target='_blank'
        rel='noreferrer'
        className='outline-none'>
        <h1 className='left-0 font-bold text-[1.5vw]'>☀️ Weather&Gallery 🖼️</h1>
      </a>
      <div className='flex items-center'>
        {pages.map((page, index) => (
          <Link
            className={
              activeIndex === index
                ? 'bg-gray-400 rounded bg-opacity-20 ease-in-out duration-500'
                : ''
            }
            onClick={() => setActiveIndex(index)}
            key={index}
            to={ways[index]}>
            <div className='mx-[1.5vw] font-bold text-[1.5vw]'>{page}</div>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
