import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ error }) => {
  return <div className='text-red-700 bg-[#d4d3be] text-center text-[3vw]'>{error}</div>;
};

ErrorMessage.propTypes = {
  error: PropTypes.string
};

export default ErrorMessage;
