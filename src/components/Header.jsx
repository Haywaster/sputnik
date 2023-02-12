import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  let pages = ['Погода', 'Фотогалерея'];
  let ways = ['', 'photo'];

  return (
    <header className='flex justify-between px-5 h-9 bg-yellow-200 rounded mb-3'>
      <h1 className='left-0 font-bold text-[20px] cursor-default'>☀️ Weather&Gallery 🖼️</h1>
      <div className='flex items-center'>
        {pages.map((page, index) => (
          <Link
            className={
              activeIndex === index
                ? 'bg-gray-400 rounded bg-opacity-20 ease-in-out duration-500'
                : ''
            }
            key={index}
            to={ways[index]}>
            <div onClick={() => setActiveIndex(index)} className='mx-5 font-bold text-lg'>
              {page}
            </div>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
