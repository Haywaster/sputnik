import { useState } from 'react';
import axios from 'axios';

export const useHttp = url => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

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

  return { items, isLoading, error, fetchData };
};
