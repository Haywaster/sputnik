import React, { useState, useRef } from 'react';
import ErrorMessage from '../components/ErrorMessage';
import Gallery from '../components/Gallery';

import SpinnerNASA from '../components/SpinnerNASA';
import { useRandomPhotoInfo, useCollectionPhotoInfo } from '../hooks/usePhotoInfo';

const PhotoPage = () => {
  const [value, setValue] = useState('');
  const { randomInfo } = useRandomPhotoInfo();
  const { items, fetchData, isLoading, error } = useCollectionPhotoInfo();

  const ref = useRef(null);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    fetchData(value);
    ref.current.value = '';
  };

  return (
    <div className='w-[50%] h-[90%] flex items-center justify-between flex-col'>
      {items.length === 0 ? (
        <>
          {randomInfo.error && <ErrorMessage error={randomInfo.error} />}
          {randomInfo.isLoading && !randomInfo.error ? (
            <SpinnerNASA />
          ) : (
            <img
              className='object-cover h-[80%]'
              src={randomInfo.items.urls.small}
              alt={randomInfo.items.alt_description}
            />
          )}
        </>
      ) : (
        <>
          {error && <ErrorMessage error={error} />}
          {isLoading && !error ? <SpinnerNASA /> : <Gallery items={items.results} />}
        </>
      )}

      <div className='w-[60%] h-[10%] flex justify-between'>
        <input
          ref={ref}
          placeholder={randomInfo.items.alt_description}
          className='w-[65%] outline-none rounded-lg text-lg p-[2%]'
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
