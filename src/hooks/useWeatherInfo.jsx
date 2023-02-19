import { useState, useEffect } from 'react';
import { useHttp } from './useHttp';

const _apiBase = 'https://api.openweathermap.org/data/2.5/';
const _apiKey = 'ab25616ed5d9d9a590d17c205029e099';
const coord = {
  lat: 56.4977,
  lon: 84.9744
};

export const useWeatherInfo = () => {
  const [stich, setStich] = useState(false);
  const dataAndTime = new Date();

  const weatherData = useHttp(
    `${_apiBase}weather?lat=${coord.lat}&lon=${coord.lon}&appid=${_apiKey}`
  );

  const { fetchData } = weatherData;

  useEffect(() => {
    fetchData();
  }, [stich]);

  return { weatherData, dataAndTime, setStich };
};
