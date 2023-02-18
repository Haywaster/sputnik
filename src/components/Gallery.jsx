import React from 'react';
import SpinnerNASA from './SpinnerNASA';

const Gallery = ({ items }) => {
  return (
    <div className='flex h-[80%] overflow-x-scroll'>
      {items.map(el => (
        <img key={el.id} className='object-cover' src={el.urls.small} alt={el.alt_description} />
      ))}
    </div>
  );
};

export default Gallery;
