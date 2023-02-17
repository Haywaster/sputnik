import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useHttp = url => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [stich, setStich] = useState(false);

  function fetchData() {
    setIsLoading(true);
    axios
      .get(url)
      .then(response => {
        setItems(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }

  // async function fetchData() {
  //   try {
  //     setIsLoading(true);
  //     const response = await axios.get(url);
  //     setItems(response.data);
  //     setIsLoading(false);
  //   } catch {
  //     setIsLoading(false);
  //     setError(axios.AxiosError);
  //     console.log(AxiosError.message);
  //   }
  // }

  useEffect(() => {
    fetchData();
  }, [stich]);

  return { items, isLoading, error, setStich };
};
