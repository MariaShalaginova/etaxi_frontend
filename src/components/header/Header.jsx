import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import css from './Header.module.css';
import HeaderMenu from '../headermenu/HeaderMenu';
import WhiteButton from '../buttons/WhiteButton';
import TransparentButton from '../buttons/TransparentButton';
import avatar from '../../assets/avatar.svg';
import location from '../../assets/location.svg';
// import axios from 'axios';
import { setCurrentCity, setGeolocation } from '../../store/actions';
import { useSelector, useDispatch } from "react-redux";
import {
    getLocation,
    showCityPopup,
    hideCityPopup,
    selectCity
  } from "../../store/actions";


const Header =()=> {
    const dispatch = useDispatch();
    const {userLocation} = useSelector(state => state.geo);
    const {showPopup} = useSelector(state => state.geo);
    const {selectedCity} = useSelector(state => state.geo);
    const {cities} = useSelector(state => state.geo);
  // const navigate = useNavigate();

    // useEffect(() => {
    //     getLocation();
    //   }, []);

      const checkCityMatch = (latitude, longitude) => {
        // Проверка совпадения координат с городами на фронтенде
        const matchedCity = cities.find(
          city =>
            city.latitude === latitude && city.longitude === longitude
        );
    
        if (matchedCity) {
          dispatch(showCityPopup(matchedCity.name));
        } else {
          dispatch(showCityPopup("Екатеринбург"));
        }
      };
    
      const handlePopupClose = () => {
        dispatch(hideCityPopup());
      };
    
      const handleCitySelection = city => {
        dispatch(selectCity(city));
      };
    
      
      const latitude = 55.7558; // Широта
      const longitude = 37.6176; // Долгота
      checkCityMatch(latitude, longitude);



    const [cityList, setCityList] = useState([]);
    // const [selectedCity, setSelectedCity] = useState('');
    let { currentCity} = useSelector((state) => state.geo);
    const [confirmCity, setConfirmCity] = useState(false);
   
    console.log(currentCity)

    return (
        <header className={css.header}>
            <div className={css.logoblock}>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                
                <div>
                    <TransparentButton>
                        <div>
                            <img className={css.location} src={location} alt="location" />
                        </div>
                        {/* {currentCity} */}
                        {selectedCity}
                    </TransparentButton>
                </div>

            </div>
            {/* {isOpen && (<MobileMenu />)} */}
            
            <HeaderMenu />

            <div className={css.avatarblock}>
                <WhiteButton>Оставить заявку</WhiteButton>
                <div>
                    <img src={avatar} alt="avatar" />
                </div>
            </div>    
               
            {/* <div className={css.gamburger}>
                <button type="button" className={css.toggle} onClick={handleToggleClick}>
                    <span className={css.line}></span>
                    <span className={css.line}></span>
                    <span className={css.line}></span>
                </button>      
            </div> */}

        </header>
    )
};

export default Header;
