import React from 'react';
import PropTypes from 'prop-types';

const NASAInfo = ({ url, title, explanation }) => {
  return (
    <div className='relative w-1/2 flex justify-center items-center h-full rounded-2xl'>
      <img
        className='h-full w-full hover:opacity-80 ease-in-out duration-300 object-cover'
        src={url}
        alt={title}
      />
      <h3 className='text-white font-bold text-[2.2vw] absolute top-0 text-center'>{title}</h3>
      <p className='text-white h-[30%] overflow-y-auto bg-black/25 text-[0.9vw] absolute bottom-0 m-[5%] p-[2%] text-justify'>
        {explanation}
      </p>
    </div>
  );
};

NASAInfo.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  explanation: PropTypes.string
};

export default NASAInfo;
