import React from 'react';
import SpinnerNASA from './SpinnerNASA';

const Gallery = ({ items }) => {
  console.log(items);
  return (
    <div style={{ display: '-webkit-box' }} className='h-[80%] overflow-x-scroll w-[160%]'>
      {items.map(el => (
        <div className='relative text-center text-white' key={el.id}>
          <h3 className='absolute top-0 w-full  text-[3vw] font-bold bg-opacity-30 bg-gray-500'>
            {el.user.name}
          </h3>
          <img
            className='object-cover h-full w-full'
            src={el.urls.small}
            alt={el.alt_description}
          />
          <p className='absolute bottom-0 w-full bg-opacity-30 bg-gray-500'>{el.alt_description}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
