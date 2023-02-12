import React from 'react';
import ContentLoader from 'react-content-loader';

const SpinnerNASA = () => (
  <ContentLoader
    className='w-1/2'
    speed={0.8}
    width={540}
    height={500}
    viewBox='0 0 540 500'
    backgroundColor='#66b0ff'
    foregroundColor='#bdd1ff'>
    <rect x='0' y='0' rx='79' ry='79' width='540' height='500' />
  </ContentLoader>
);

export default SpinnerNASA;
