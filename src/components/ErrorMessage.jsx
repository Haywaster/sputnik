import React from 'react';

const ErrorMessage = ({ error }) => {
  return <div className='text-red-700 bg-[#d4d3be] text-center text-[3vw]'>{error}</div>;
};

export default ErrorMessage;
