import React from 'react';

import { useNASAInfo } from '../hooks/useNASAInfo';
import { useWeatherInfo } from '../hooks/useWeatherInfo';

import Spinner from '../components/Spinner';
import SpinnerNASA from '../components/SpinnerNASA';
import WeatherInfo from '../components/WeatherInfo';
import NASAInfo from '../components/NASAInfo';

const WeatherPage = () => {
  const { name, weather, sys, main, isLoading, dataAndTime, setStich } = useWeatherInfo();
  const { items, isLoadingNASA } = useNASAInfo();

  const onUpdateData = () => {
    setStich(prev => !prev);
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <WeatherInfo
          name={name}
          country={sys.country}
          time={dataAndTime.toLocaleString()}
          image={`https://openweathermap.org/img/wn/${weather.map(el => el.icon)}@2x.png`}
          temp={(main.temp - 273.15).toFixed(0) + '°C'}
          status={weather.map(el => el.main)}
          onUpdateData={onUpdateData}
        />
      )}
      {isLoadingNASA ? <SpinnerNASA /> : <NASAInfo items={items} />}
    </>
  );
};

export default WeatherPage;
