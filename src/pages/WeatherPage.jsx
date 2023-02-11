import React from 'react';

import { useNASAInfo } from '../hooks/useNASAInfo';
import { useWeatherInfo } from '../hooks/useWeatherInfo';

import Loading from '../components/Loading';
import WeatherInfo from '../components/WeatherInfo';

const WeatherPage = () => {
  const { name, weather, sys, main, isLoading, dataAndTime } = useWeatherInfo();
  const { items, isLoadingNASA } = useNASAInfo();

  console.log(items);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <WeatherInfo
          name={name}
          country={sys.country}
          time={dataAndTime.toLocaleString()}
          image={`https://openweathermap.org/img/wn/${weather.map(el => el.icon)}@2x.png`}
          temp={(main.temp - 273.15).toFixed(1) + '°C'}
          status={weather.map(el => el.main)}
        />
      )}
      {isLoadingNASA ? (
        <Loading />
      ) : (
        <div className='text-center w-[100%]'>
          <h2 className='font-bold'>Изображение дня</h2>
          <p>{items.title}</p>
          <img className='w-[40%] mx-auto' src={items.url} alt={items.title} />
          <p>{items.explanation}</p>
        </div>
      )}
    </>
  );
};

export default WeatherPage;
