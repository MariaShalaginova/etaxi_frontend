import React from "react";
import css from './MainPage.module.css'
// import MainPageFoto1 from '../../assets/main-page-foto1.jpg'
import { Link } from 'react-router-dom';
import LocationPopup from '../../geolocation/LocationPopup'
// import ReduxApp from "../../App-redux";
// import UserPage from "../user-login-page/UserPage";

const MainPage = () => {
    
    return (
        <section >

         <LocationPopup />

        </section>
    )
}

export default MainPage