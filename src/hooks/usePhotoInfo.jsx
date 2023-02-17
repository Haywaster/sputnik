import React from 'react';
import { useHttp } from './useHttp';

const _apiBase = 'https://api.unsplash.com';
const _apiRandom = '/photos/random';
const _apiItems = '/search/photos?page=1&query=';
const _apiKey = 'mgBvzOssXzntyHTErqbHJM5VZBxFg3kH68ztA0kh8Kw';

export const useRandomPhotoInfo = () => {
  const randomInfo = useHttp(`${_apiBase}${_apiRandom}?client_id=${_apiKey}`);
  return { randomInfo };
};

export const useCollectionPhotoInfo = img => {
  const collectionInfo = useHttp(`${_apiBase}${_apiItems}${img}&client_id=${_apiKey}`);
  return { collectionInfo };
};

// https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${Access_Key}
