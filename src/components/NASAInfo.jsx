import React from 'react';

const NASAInfo = ({ items }) => {
  return (
    <div className='w-1/2'>
      <div
        style={{ background: `url(${items.url}) center center/cover` }}
        className='h-[500px] flex flex-col justify-between text-center p-10 rounded-2xl'>
        <div>
          <h3 className='text-white font-bold text-3xl'>{items.title}</h3>
        </div>
        <p className='text-white h-[30%] overflow-y-auto bg-black/25'>{items.explanation}</p>
      </div>
    </div>
  );
};

export default NASAInfo;
