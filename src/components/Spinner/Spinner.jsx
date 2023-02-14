import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className='relative w-1/3 h-2/3'>
      <div id='frame_circle'>
        <div className='circle'></div>
        <div className='innerCircle'></div>
      </div>
      <div id='frame'>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
    </div>
  );
};

export default Spinner;
