import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useNASAInfo = () => {
  const [items, setItems] = useState([]);
  const [isLoadingNASA, setIsLoadingNASA] = useState(true);

  const _apiBase = 'https://api.nasa.gov/planetary/';
  const _apiKey = 'hOQDMDj66ZBL2cBFUmQlFEbopCTajjaRWjQnkFxj';

  async function fetchData() {
    const response = await axios.get(`${_apiBase}apod?api_key=${_apiKey}`);
    setItems(response.data);
    setIsLoadingNASA(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const { url } = items;
  return { items, isLoadingNASA };
};
