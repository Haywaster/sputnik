import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

const _apiBase = 'https://api.unsplash.com';
const _apiRandom = '/photos/random';
const _apiKey = 'A4wVqhvmcAQOV6wcdpUw6LfPDr-PaMXZ4MRliWbN8C4';

export const usePhotoInfo = () => {
  const [random, setRandom] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchData() {
    try {
      const response = await axios.get(`${_apiBase}${_apiRandom}?client_id=${_apiKey}`);
      setRandom(response.data);
      setIsLoading(false);
    } catch {
      const error = AxiosError;
      setIsLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { random, isLoading, error };
};
