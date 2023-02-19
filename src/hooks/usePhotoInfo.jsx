import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHttp } from './useHttp';

const _apiBase = 'https://api.unsplash.com';
const _apiRandom = '/photos/random';
const _apiItems = '/search/photos?page=1&query=';
const _apiKey = 'mgBvzOssXzntyHTErqbHJM5VZBxFg3kH68ztA0kh8Kw';

export const useRandomPhotoInfo = () => {
  const randomInfo = useHttp(`${_apiBase}${_apiRandom}?client_id=${_apiKey}`);
  const { fetchData } = randomInfo;

  useEffect(() => {
    fetchData();
  }, []);
  return { randomInfo };
};

export const useCollectionPhotoInfo = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  async function fetchData(value) {
    if (value) {
      setIsLoading(true);
      await axios
        .get(`${_apiBase}${_apiItems}${value}&client_id=${_apiKey}`)
        .then(response => {
          setItems(response.data);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setIsLoading(false);
        });
    }
  }

  return { items, isLoading, error, fetchData };
};
