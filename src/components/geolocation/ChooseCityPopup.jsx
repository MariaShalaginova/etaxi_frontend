import React, { useState } from 'react';
import css from './LocationPopup.module.css';
import location from '../../assets/violet-location.svg';
import VioletButton from '../buttons/VioletButton';
import LiteVioletButton from '../buttons/LiteVioletButton';

const ChooseCityPopup = () =>{
  const [isHidden, setIsHidden] = useState(false);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };
    
      return (
        <div className={isHidden ? css.locationCityPopup : css.hide}>
           <div className={css.ask}>
              
                <img  src={location} alt="location" />
              
               <div className={css.text}>
                 
                    Ваш город Екатеринбург?
                 
                </div> 
           </div> 
            <div className={css.btnWrap}>
                <VioletButton onClick={toggleVisibility}>Да, верно</VioletButton>
                <LiteVioletButton>Нет, другой</LiteVioletButton>
            </div>
        </div>
      )
    
  }
  
  export default ChooseCityPopup;