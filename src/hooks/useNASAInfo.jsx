import { useEffect } from 'react';
import { useHttp } from './useHttp';

const _apiBase = 'https://api.nasa.gov/planetary/';
const _apiKey = 'hOQDMDj66ZBL2cBFUmQlFEbopCTajjaRWjQnkFxj';

export const useNASAInfo = () => {
  const NASAData = useHttp(`${_apiBase}apod?api_key=${_apiKey}`);
  const { fetchData } = NASAData;
  useEffect(() => {
    fetchData();
  }, []);
  return { NASAData };
};
