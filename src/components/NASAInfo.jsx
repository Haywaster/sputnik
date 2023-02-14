import React from 'react';

const NASAInfo = ({ items }) => {
  return (
    <div className='w-1/2 flex justify-center items-center h-4/5'>
      <div
        style={{ background: `url(${items.url}) center center/cover` }}
        className='h-full flex flex-col justify-between text-center p-10 rounded-2xl hover:opacity-80 ease-in-out duration-300'>
        <h3 className='text-white font-bold text-[2.2vw]'>{items.title}</h3>
        <p className='text-white h-[30%] overflow-y-auto bg-black/25 text-[0.9vw]'>
          {items.explanation}
        </p>
      </div>
    </div>
  );
};

export default NASAInfo;
