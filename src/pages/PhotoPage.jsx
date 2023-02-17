import React, { useState, useRef } from 'react';
import axios from 'axios';

import SpinnerNASA from '../components/SpinnerNASA';
import { useRandomPhotoInfo, useCollectionPhotoInfo } from '../hooks/usePhotoInfo';

const _apiBase = 'https://api.unsplash.com';
const _apiItems = '/search/photos?page=1&query=';
const _apiKey = 'mgBvzOssXzntyHTErqbHJM5VZBxFg3kH68ztA0kh8Kw';

const PhotoPage = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const { randomInfo } = useRandomPhotoInfo();
  const { items } = randomInfo;
  // const { collectionInfo } = useCollectionPhotoInfo();

  const ref = useRef(null);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    axios
      .get(`${_apiBase}${_apiItems}${value}&client_id=${_apiKey}`)
      .then(response => {
        setPhotos(response.data.results);
        setIsLoading(false);
        console.log(response.data.results);
      })
      .catch(error => setError(error));
    ref.current.value = '';
  };

  return (
    <div className='w-[50%] h-[90%] flex items-center justify-between flex-col'>
      {isLoading ? (
        <SpinnerNASA />
      ) : (
        <div className='flex h-[80%] overflow-y-scroll'>
          {photos.map(el => (
            <img
              key={el.id}
              className='object-cover'
              src={el.urls.small}
              alt={el.alt_description}
            />
          ))}
        </div>
      )}
      {/* {randomInfo.isLoading ? (
        <SpinnerNASA />
      ) : (
        <img className='object-cover h-[80%]' src={items.urls.small} alt={items.alt_description} />
      )} */}
      {error ? <div>{error}</div> : null}
      <div className='w-[60%] h-[10%] flex justify-between'>
        <input
          ref={ref}
          className='w-[65%] outline-none rounded-lg text-lg p-[2%]'
          placeholder={items.alt_description}
          onChange={handleChange}
          type='text'
        />
        <button
          onClick={handleSubmit}
          className='w-[30%] bg-red-200 outline-none rounded-lg text-[1.5vw]'
          type='submit'>
          Search
        </button>
      </div>
    </div>
  );
};

export default PhotoPage;
