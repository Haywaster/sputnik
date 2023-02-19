import { useHttp } from './useHttp';

const _apiBase = 'https://api.openweathermap.org/data/2.5/';
const _apiKey = 'ab25616ed5d9d9a590d17c205029e099';
const coord = {
  lat: 56.4977,
  lon: 84.9744
};

export const useWeatherInfo = () => {
  const dataAndTime = new Date();
  const weatherData = useHttp(
    `${_apiBase}weather?lat=${coord.lat}&lon=${coord.lon}&appid=${_apiKey}`
  );
  return { weatherData, dataAndTime };
};

const hour = new Date().getHours();

const getTimesOfDay = hour => {
  let timesOfDay = '';
  for (let i = 0; i <= 24; i++) {
    if (hour === i) {
      if (i >= 0 && i < 6) timesOfDay = 'night';
      if (i >= 6 && i < 12) timesOfDay = 'morning';
      if (i >= 12 && i < 17) timesOfDay = 'day';
      if (i >= 17 && i < 24) timesOfDay = 'evening';
    }
  }
  return timesOfDay;
};

export const timesOfDay = getTimesOfDay(hour);
