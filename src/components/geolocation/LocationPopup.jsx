import React, { useState } from 'react';
import css from './LocationPopup.module.css';
import location from '../../assets/violet-location.svg';
import VioletButton from '../buttons/VioletButton';
import LiteVioletButton from '../buttons/LiteVioletButton';
// import ChooseCityPopup from './ChooseCityPopup';
import { useNavigate } from 'react-router-dom';

const LocationPopup = () =>{
  const [isHidden, setIsHidden] = useState(false);
  const navigate = useNavigate();

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };
    
      return (
        <div className={isHidden ? css.locationPopup : css.hide}>
           <div className={css.ask}>
              
                <img src={location} alt="location" />
              
               <div className={css.text}>
                 
                    Ваш город Екатеринбург?
                 
                </div> 
           </div> 
            <div className={css.btnWrap}>
                <VioletButton onClick={toggleVisibility}>Да, верно</VioletButton>
                <LiteVioletButton onClick={async event => {navigate('/ChooseCityPopup')}}>Нет, другой</LiteVioletButton>
            </div>
        </div>
      )
    
  }
  
  export default LocationPopup;