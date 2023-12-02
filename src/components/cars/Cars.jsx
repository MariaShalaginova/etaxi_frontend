// import React, { useState, useEffect } from 'react';
import css from '../cars/Cars.module.css'
import CarCard from './CarCard';
import arrowLeft from '../../assets/arrow_left.png';
import arrowRight from '../../assets/arrow_right.png';
// import axios from 'axios';

const Cars=() =>{
    
    //запрос на бэк
    // useEffect(() =>{
    //   let data;
    //   axios.get('http://localhost:8000/cars/')
    //   .then(res => {
    //     data = res.data;
    //     setState(
    //       data
    //     );
    //     console.log(data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
      
    // }, [])
  
    
      return (
        <section>
          
            <div className={css.title}>
               <h1>Автомобили нашего таксопарка</h1>
            </div>

            <div className={css.cards}> 
              <img className={css.arrows} src={arrowLeft}></img>
              <CarCard />
              <CarCard />
              <img className={css.arrows} src={arrowRight}></img>
            </div>    
              {/*             
            {state.map((car, id) => (
              <div key={id}>
                <div>
                  <h2>{car.model}</h2>
                  <p>{car.kpp}</p>
                </div>
              </div>
            ))} */}
          
        </section>
      )
    
  }
  
  export default Cars;