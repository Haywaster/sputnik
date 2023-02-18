import React from 'react';

import { useNASAInfo } from '../hooks/useNASAInfo';
import { useWeatherInfo } from '../hooks/useWeatherInfo';

import Spinner from '../components/Spinner';
import SpinnerNASA from '../components/SpinnerNASA';
import WeatherInfo from '../components/WeatherInfo';
import NASAInfo from '../components/NASAInfo';
import ErrorMessage from '../components/ErrorMessage';

const WeatherPage = () => {
  const { weatherData, dataAndTime } = useWeatherInfo();
  const { NASAData } = useNASAInfo();

  const onUpdateData = () => {
    weatherData.setStich(prev => !prev);
  };

  return (
    <>
      {weatherData.isLoading ? (
        <Spinner />
      ) : (
        <WeatherInfo
          name={weatherData.items.name}
          country={weatherData.items.sys.country}
          time={dataAndTime.toLocaleString()}
          image={`https://openweathermap.org/img/wn/${weatherData.items.weather.map(
            el => el.icon
          )}@2x.png`}
          temp={(weatherData.items.main.temp - 273.15).toFixed(0) + '°C'}
          status={weatherData.items.weather.map(el => el.main)}
          onUpdateData={onUpdateData}
        />
      )}
      {NASAData.isLoading ? (
        <SpinnerNASA />
      ) : (
        <NASAInfo
          url={NASAData.items.url}
          title={NASAData.items.title}
          explanation={NASAData.items.explanation}
        />
      )}
      {weatherData.error && <ErrorMessage error={weatherData.error} />}
      {NASAData.error && <ErrorMessage error={NASAData.error} />}
    </>
  );
};

export default WeatherPage;
