import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { useWeatherInfo } from './hooks/useWeatherInfo';

import Header from './components/Header';
import WeatherPage from './pages/WeatherPage';
import PhotoPage from './pages/PhotoPage';
import Background from './components/Background';

const App = () => {
  const { timesOfDay } = useWeatherInfo();
  let bgColor = '';
  let skyColor = '';

  switch (timesOfDay) {
    case 'morning':
      bgColor = 'bg-white';
      skyColor = 'bg-blue-400';
      break;
    case 'day':
      bgColor = 'bg-gray-100';
      skyColor = 'bg-blue-600';
      break;
    case 'evening':
      bgColor = 'bg-gray-500';
      skyColor = 'bg-blue-900';
      break;
    case 'night':
      bgColor = 'bg-gray-900';
      skyColor = 'bg-gray-800';
      break;
    default:
      bgColor = 'bg-gray-100';
      skyColor = 'bg-blue-400';
      break;
  }

  return (
    <div className={`h-[100vh] py-[3vw] px-[10vw] ${bgColor} font-bodyFont`}>
      <Header />
      <section
        className={`relative flex justify-evenly items-center p-10 ${skyColor} h-[80vh] rounded-lg z-10`}>
        <Background />
        <Routes>
          <Route path='/' element={<WeatherPage />} />
          <Route path='/photo' element={<PhotoPage />} />
        </Routes>
      </section>
    </div>
  );
};

export default App;
