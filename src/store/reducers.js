import { SET_CURRENT_CITY, SET_GEOLOCATION } from './actions';

const initialState = {
  currentCity: 'Екатеринбург',
  userLocation: null,
  error: null,
  showPopup: false,
  selectedCity: null,
  cities: [{
    name: "Екатеринбург",
    adress: ['просп. Космонавтов, 31А'],
    phone: '+7 (3822) 98-40-30',
    latitude: 354387.43891091,
    longitute: 6303441.3195083
},
  { 
    name: "Томск",
    adress: ['Торговая, 5', 'Иркутский тракт, 77', 'Набережная реки Томи, 19/1', 'Алтайская, 3', "Иркутский проезд, 1", "Смирнова, 9с3"],
    phone: '+7 (3822) 98-40-30',
    latitude: 375304.39941619,
    longitute: 6263313.950946 
  }
]
};

// const initialState = {
//   userLocation: null,
//   error: null,
//   showPopup: false,
//   showSelection: false,
//   selectedCity: null,
//   cities: [] // Здесь должен быть массив объектов городов с координатами с бэкенда
// };

// const geoLocationReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case SET_CURRENT_CITY:
//         return {
//           ...state,
//           currentCity: action.payload,
//         };
//       case SET_GEOLOCATION:
//         return {
//           ...state,
//           latitude: action.payload.latitude,
//           longitude: action.payload.longitude,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default geoLocationReducer;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_LOCATION":
      return {
        ...state,
        userLocation: action.payload,
        showPopup: true
      };
    case "SET_USER_LOCATION_ERROR":
      return {
        ...state,
        error: action.payload
      };
    case "SHOW_CITY_POPUP":
      const cityName = action.payload;
      return {
        ...state,
        showPopup: true,
        selectedCity: cityName
      };
    case "HIDE_CITY_POPUP":
      return {
        ...state,
        showPopup: false
      };
    case "SELECT_CITY":
      return {
        ...state,
        selectedCity: action.payload,
        showPopup: false
      };
    default:
      return state;
  }
};

export default reducer;