import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

export const useNASAInfo = () => {
  const [items, setItems] = useState([]);
  const [isLoadingNASA, setIsLoadingNASA] = useState(true);
  const [error, setError] = useState(false);

  const _apiBase = 'https://api.nasa.gov/planetary/';
  const _apiKey = 'hOQDMDj66ZBL2cBFUmQlFEbopCTajjaRWjQnkFxj';

  async function fetchData() {
    try {
      const response = await axios.get(`${_apiBase}apod?api_key=${_apiKey}`);
      setItems(response.data);
      setIsLoadingNASA(false);
    } catch {
      const error = AxiosError;
      setIsLoadingNASA(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { items, isLoadingNASA };
};
