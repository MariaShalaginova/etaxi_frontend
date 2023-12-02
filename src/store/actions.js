export const LOCATION_REQUEST= 'LOCATION_REQUEST';
export const LOCATION_SUCCESS = 'LOCATION_SUCCESS';
export const LOCATION_FAILURE = 'LOCATION_FAILURE';
export const SET_CURRENT_CITY = 'SET_CURRENT_CITY';
export const SET_GEOLOCATION = 'SET_GEOLOCATION';


// export const setCurrentCity = (city) => ({
//     type: SET_CURRENT_CITY,
//     payload: city,
//   });

//   export const setGeolocation = (latitude, longitude) => ({
//     type: SET_GEOLOCATION,
//     payload: { latitude, longitude },
//   });
export const getLocation = async()=> {
  return dispatch => {
  try {
      if (navigator.geolocation) {
          const geoLoc = navigator.geolocation;
          geoLoc.getCurrentPosition(async(position) => {
              const { latitude, longitude } = position.coords; 
              console.log(latitude, longitude);  
              dispatch(setUserLocation({ latitude, longitude }))                  
          },
          (error)=> {
              console.error('Error fetching data:', error);
              dispatch(setUserLocationError(error.message));
              throw error; // Можно обработать ошибку здесь или передать ее выше для обработки
          }
      )
      
      } else {
      console.error('Geolocation is not supported by this browser.');
      dispatch(setUserLocationError("Геолокация не поддерживается"))
      }

  } catch (error) {
      console.error('Error fetching user location:', error);
    }
  };
}


export const setUserLocation = location => {
  return {
    type: "SET_USER_LOCATION",
    payload: location
  };
};

export const setUserLocationError = error => {
  return {
    type: "SET_USER_LOCATION_ERROR",
    payload: error
  };
};

export const showCityPopup = cityName => {
  return {
    type: "SHOW_CITY_POPUP",
    payload: cityName
  };
};

export const hideCityPopup = () => {
  return {
    type: "HIDE_CITY_POPUP"
  };
};

export const selectCity = city => {
  return {
    type: "SELECT_CITY",
    payload: city
  };
};