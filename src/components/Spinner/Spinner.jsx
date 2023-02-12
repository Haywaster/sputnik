import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <>
      <div id='frame_circle'>
        <div class='circle'></div>
        <div class='innerCircle'></div>
      </div>
      <div id='frame'>
        <div class='bar'></div>
        <div class='bar'></div>
        <div class='bar'></div>
        <div class='bar'></div>
        <div class='bar'></div>
        <div class='bar'></div>
        <div class='bar'></div>
        <div class='bar'></div>
        <div class='bar'></div>
      </div>
    </>
  );
};

export default Spinner;
