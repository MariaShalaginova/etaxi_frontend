import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Cars from './components/cars/Cars';
import Header from './components/header/Header';
import Main from './components/main/Main';
import ChooseCityPopup from './components/geolocation/ChooseCityPopup';
import LocationPopup from './components/geolocation/LocationPopup';
import Advantages from './components/advamtages/Advantages';

function App() {


  return (
    <div className="wrapper">
    {/* <Header /> */}
      <Routes>
        <Route exact path="/" element={<Main />} /> 
        {/* {/* <Route path="/game" element={<Game />} />  */}
        <Route path="/ChooseCityPopup" element={<ChooseCityPopup />} />
        <Route path="/LocationPopup " element={<LocationPopup />} />
        <Route path="/Advantages " element={<Advantages />} />
      </Routes> 
    </div>
  );
};

export default App;


