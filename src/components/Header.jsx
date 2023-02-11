import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex justify-between px-5 h-9 bg-yellow-200 rounded mb-3'>
      <h1 className='left-0 font-bold text-[20px]'>Погода ☀️</h1>
      <div className='flex items-center'>
        <Link to='/'>
          <div className='mx-5'>Погода</div>
        </Link>
        <Link to='/photo'>
          <div className='mx-5'>Фотогалерея</div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
