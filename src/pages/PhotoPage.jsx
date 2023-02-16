import React from 'react';

import SpinnerNASA from '../components/SpinnerNASA';
import { usePhotoInfo } from '../hooks/usePhotoInfo';

const PhotoPage = () => {
  const { random } = usePhotoInfo();

  return (
    <>
      <h3 className='text-5xl font-bold opacity-70'>Здесь будут фото!</h3>
      <img src={random ? random.urls.small : <SpinnerNASA />} alt={''} />
    </>
  );
};

export default PhotoPage;
