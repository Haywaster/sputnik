import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  let pages = ['Погода', 'Фотогалерея'];
  let ways = ['', 'photo'];

  return (
    <header className='flex justify-between items-center h-[9%] px-[1.5vw] bg-yellow-200 rounded mb-3'>
      <h1 className='left-0 font-bold text-[1.5vw] cursor-default'>☀️ Weather&Gallery 🖼️</h1>
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
            <div className='mx-5 font-bold text-[1.5vw]'>{page}</div>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
