import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cities = () =>{
    const [state, setState] = useState ([])
  
    useEffect(() =>{
      let data;
      axios.get('http://localhost:8000')
      .then(res => {
        data = res.data;
        setState(
          data
        );
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })
      
    }, [])
  
    
    
      return (
        <div>
          <header>Данные из Django</header>
          <hr></hr>
          {/* {state.map((car, id) => (
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
  
  export default Cities;


// import React from 'react';
// import './App.css';
// import axios from 'axios';

// class App extends React.Component{
//   state = { details: [], }

//   componentDidMount(){
//     let data;
//     axios.get('http://localhost:8000/cars/')
//     .then(res => {
//       data = res.data;
//       this.setState({
//         details: data
//       });
//       console.log(data);
//     })
//     .catch(err => {
//       console.log(err);
//     })
    
//   }

  
//   render() {
//     return (
//       <div>
//         <header>Данные из Django</header>
//         <hr></hr>
//         {this.state.details.map((car, id) => (
//           <div key={id}>
//             <div>
//               <h2>{car.model}</h2>
//               <p>{car.kpp}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     )
//   }
// }

// export default App;
