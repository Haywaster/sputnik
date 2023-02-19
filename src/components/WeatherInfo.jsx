import React from 'react';
import PropTypes from 'prop-types';

import { timesOfDay } from '../hooks/useWeatherInfo';

let bgColor = '';
let textColor = '';

switch (timesOfDay) {
  case 'morning':
    textColor = 'text-black';
    bgColor = 'bg-blue-300';
    break;
  case 'day':
    textColor = 'text-black';
    bgColor = 'bg-blue-400';
    break;
  case 'evening':
    textColor = 'text-gray-300';
    bgColor = 'bg-blue-500';
    break;
  case 'night':
    textColor = 'text-gray-300';
    bgColor = 'bg-gray-700';
    break;
  default:
    textColor = 'text-black';
    bgColor = 'bg-blue-300';
    break;
}

const WeatherInfo = ({ name, country, temp, time, image, status, onUpdateData }) => {
  return (
    <div className={`${textColor} w-1/3 flex flex-col h-2/3`}>
      <div
        className={`h-full border-[0.3vw] flex items-center justify-center flex-col rounded-lg p-[5%] ${bgColor} hover:bg-opacity-70 ease-in-out duration-300 outline-none`}>
        <div className='text-center'>
          <div className='font-bold text-[2.5vw]'>
            {name} {country}
          </div>
          <div className='font-bold text-[1.1vw]'>{time}</div>
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
        className={`${bgColor} w-1/2 mx-auto h-1/4 mt-[1vw] border-[0.3vw] rounded-md hover:bg-opacity-70 ease-in-out duration-300 outline-none font-bold text-[1.5vw]`}>
        Обновить
      </button>
    </div>
  );
};

WeatherInfo.propTypes = {
  name: PropTypes.string,
  country: PropTypes.string,
  temp: PropTypes.string,
  time: PropTypes.string,
  image: PropTypes.string,
  status: PropTypes.string,
  onUpdateData: PropTypes.func
};

export default WeatherInfo;
