import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WeatherPage from './pages/WeatherPage';
import PhotoPage from './pages/PhotoPage';
import Background from './components/Background';

const App = () => {
  return (
    <div className='h-[100vh] py-10 px-40 bg-gray-100 font-bodyFont'>
      <Header />
      <section className='relative flex justify-evenly items-center p-10 bg-blue-400 h-[80vh] rounded-lg z-10'>
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
