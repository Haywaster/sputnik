import React from 'react';

const WeatherInfo = ({ name, country, temp, time, image, status, onUpdateData }) => {
  return (
    <div className='w-[30%] flex justify-center flex-col'>
      <div className='border-4 rounded-lg p-6'>
        <div className='text-center'>
          <div className='font-bold text-2xl'>
            {name} {country}
          </div>
          <div className='font-bold'>{time}</div>
        </div>
        <div className='flex justify-evenly items-center'>
          <div className='font-bold text-3xl'>{temp}</div>
          <div className='text-center'>
            <img src={image} alt={status} />
            <div className='font-bold'>{status}</div>
          </div>
        </div>
      </div>
      <button
        onClick={onUpdateData}
        className='bg-blue-300 mt-5 h-[50px] w-[100px] mx-auto border rounded-md'>
        Обновить
      </button>
    </div>
  );
};

export default WeatherInfo;
