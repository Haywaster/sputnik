import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WeatherPage from './pages/WeatherPage';
import PhotoPage from './pages/PhotoPage';

const App = () => {
  return (
    <div className='h-[100vh] py-10 px-40 bg-gray-100'>
      <Header />
      <section className='flex justify-center items-center p-10 bg-green-400 min-h-[80vh] rounded-lg'>
        <Routes>
          <Route path='/' element={<WeatherPage />} />
          <Route path='/photo' element={<PhotoPage />} />
        </Routes>
      </section>
    </div>
  );
};

export default App;
