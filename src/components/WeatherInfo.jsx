import React from 'react';

const WeatherInfo = ({ name, country, temp, time, image, status, onUpdateData }) => {
  return (
    <div className='w-1/3 flex flex-col h-2/3'>
      <div className='h-full border-4 flex items-center justify-center flex-col rounded-lg p-6 bg-blue-300 hover:bg-opacity-70 ease-in-out duration-300 outline-none'>
        <div className='text-center'>
          <div className='font-bold text-[1.5vw]'>
            {name} {country}
          </div>
          <div className='font-bold text-[0.9vw]'>{time}</div>
        </div>
        <div className='flex justify-evenly items-center'>
          <div className='font-bold text-[2.5vw]'>{temp}</div>
          <div className='text-center'>
            <img className='h-[5vw]' src={image} alt={status} />
            <div className='font-bold text-[1vw]'>{status}</div>
          </div>
        </div>
      </div>
      <button
        onClick={onUpdateData}
        className='bg-blue-300 w-1/2 mx-auto h-1/4 mt-[1vw] border rounded-md hover:bg-opacity-70 ease-in-out duration-300 outline-none font-bold text-[1.2vw]'>
        Обновить
      </button>
    </div>
  );
};

// bg-blue-300 mt-5 h-[500px] w-[9vw] mx-auto border rounded-md hover:bg-opacity-70 ease-in-out duration-300 outline-none font-bold text-[1vw]

export default WeatherInfo;
