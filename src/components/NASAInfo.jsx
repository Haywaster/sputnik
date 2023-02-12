import React from 'react';

const NASAInfo = ({ items }) => {
  return (
    <div className='w-[100%]'>
      <div
        style={{ background: `url(${items.url}) center center/cover` }}
        className='h-[500px] flex flex-col justify-between text-center p-10'>
        <div>
          <h3 className='text-white font-bold text-2xl'>{items.title}</h3>
        </div>
        <p className='text-white h-[30%] overflow-y-auto '>{items.explanation}</p>
      </div>
    </div>
  );
};

export default NASAInfo;
