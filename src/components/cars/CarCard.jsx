import React, { useState, useEffect } from 'react';
import css from '../cars/Cars.module.css';
import car from '../../assets/car.png';
import akpp from '../../assets/akpp_icon.svg';
import volume from '../../assets/volume_icon.svg';
import ruble from '../../assets/ruble_icon.svg';
import VioletButton from '../buttons/VioletButton';
// import axios from 'axios';

const CarCard=() =>{
    const [state, setState] = useState ([])
  
    const cars = [
        {
            id:1,
            model: 'VolksWagen Bora',
            kpp: 'AКПП',
            volume: '1,5 л',
            econom: "Экономия 250р/100км",
            image: car
        },
        {
            id:2,
            model: 'Skoda Rapid 2021',
            kpp: 'МКПП',
            volume: '1,6 л',
            econom: "Экономия 200р/100км",
            image: car
        },
        {
            id:3,
            model: 'Toyota Camry 2020 г.',
            kpp: 'AКПП',
            volume: '2,5 л',
            econom: "Экономия 200р/100км",
            image: car
        },
        {
            id:4,
            model: 'Skoda Octavia 2020 г.',
            kpp: 'МКПП',
            volume: '1,6 л',
            econom: "Экономия 200р/100км",
            image: car
        }
    ]

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
        
          <div className={css.card}>
            <div className={css.img} >
                <img src={car}></img>
            </div>

            <div className={css.textBlock}>
                
                <div className={css.model}>VolksWagen Bora</div>

                <div className={css.tech}> 
                    <img src={akpp}></img>
                    <p>АКПП</p>
                </div>

                <div className={css.tech}> 
                    <img src={volume}></img> 
                    <p>V = 1.5л</p>
                </div>

                <div className={css.tech}>  
                    <img src={ruble}></img> 
                     <p>Экономия 250р/100км</p>
                </div>

                <VioletButton >Взять в аренду</VioletButton>

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
          </div>
     
      )
    
  }
  
  export default CarCard;