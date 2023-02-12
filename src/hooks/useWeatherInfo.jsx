import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useWeatherInfo = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [stich, setStich] = useState(false);

  const _apiBase = 'https://api.openweathermap.org/data/2.5/';
  const _apiKey = 'ab25616ed5d9d9a590d17c205029e099';
  const coord = {
    lat: 56.4977,
    lon: 84.9744
  };
  const dataAndTime = new Date();

  async function fetchData() {
    setIsLoading(true);
    const response = await axios.get(
      `${_apiBase}weather?lat=${coord.lat}&lon=${coord.lon}&appid=${_apiKey}`
    );
    setItems(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [stich]);

  const { name, weather, sys, main } = items;
  return { name, weather, sys, main, isLoading, dataAndTime, setStich };
};
