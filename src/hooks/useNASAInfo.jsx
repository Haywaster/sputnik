import React, { useState, useEffect } from 'react';
import { useHttp } from './useHttp';

const _apiBase = 'https://api.nasa.gov/planetary/';
const _apiKey = 'hOQDMDj66ZBL2cBFUmQlFEbopCTajjaRWjQnkFxj';

export const useNASAInfo = () => {
  const NASAData = useHttp(`${_apiBase}apod?api_key=${_apiKey}`);
  return { NASAData };
};

// const [items, setItems] = useState([]);
// const [isLoadingNASA, setIsLoadingNASA] = useState(true);
// const [error, setError] = useState(false);

// async function fetchData() {
//   try {
//     const response = await axios.get(`${_apiBase}apod?api_key=${_apiKey}`);
//     setItems(response.data);
//     setIsLoadingNASA(false);
//   } catch {
//     const error = AxiosError;
//     setIsLoadingNASA(false);
//     setError(error.message);
//   }
// }

// useEffect(() => {
//   fetchData();
// }, []);

// return { items, isLoadingNASA, error };
