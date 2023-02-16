import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

const _apiBase = 'https://api.openweathermap.org/data/2.5/';
const _apiKey = 'ab25616ed5d9d9a590d17c205029e099';
const coord = {
  lat: 56.4977,
  lon: 84.9744
};
export const dataAndTime = new Date();
const hour = dataAndTime.getHours();

function getTimesOfDay(hour) {
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
}

export const timesOfDay = getTimesOfDay(hour);

export const useWeatherInfo = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [stich, setStich] = useState(false);

  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${_apiBase}weather?lat=${coord.lat}&lon=${coord.lon}&appid=${_apiKey}`
      );
      setItems(response.data);
      setIsLoading(false);
    } catch {
      const error = AxiosError;
      setIsLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, [stich]);

  const { name, weather, sys, main } = items;
  return { name, weather, sys, main, isLoading, error, setStich };
};
