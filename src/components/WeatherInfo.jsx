import React from 'react';

const WeatherInfo = ({ name, country, temp, time, image, status }) => {
  return (
    <div className='w-[100%] flex justify-center'>
      <div className='border-4 rounded-lg p-6'>
        <div className='text-center'>
          <div className='font-bold'>
            {name} {country}
          </div>
          <div className='font-bold'>{time}</div>
        </div>
        <div className='flex justify-evenly items-center'>
          <div className='font-bold text-3xl'>{temp}</div>
          <div className='text-center'>
            <img src={image} alt={status} />
            <div>{status}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
