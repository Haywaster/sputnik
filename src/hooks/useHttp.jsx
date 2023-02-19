import { useState, useEffect } from 'react';
import axios from 'axios';

export const useHttp = url => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [stich, setStich] = useState(false);

  async function fetchData() {
    setIsLoading(true);
    await axios
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

  useEffect(() => {
    fetchData();
  }, [stich]);

  return { items, isLoading, error, setStich, fetchData };
};