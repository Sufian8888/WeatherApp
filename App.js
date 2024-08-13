import { useState } from 'react';
import './App.css';

function App() {
  let [city,setCity] = useState('');
  let [wDetail,setWdetail] =useState();
  let finalRes ='';
  let getData = async() =>{
    let url = (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`)
    let response = await fetch(url); 
    let wDetail = await response.json();

    console.log(wDetail);
    // .then((res)=>res.json)
    // .then((finalRes)= () => {
      if(finalRes.cod=="404")
      {
        setWdetail(undefined);
      }
      else{
      
      setWdetail(wDetail);
  }
}
  return (
    <div className="App">
    <h1>Simple Weather App</h1>
    <input type='text' value={city} placeholder='Enter City' onChange={(e)=>{setCity(e.target.value)}} /> 
    <button onClick={getData}>Submit</button>    
    <div className='weatherbox'>
      {wDetail!=undefined
      ?
      <>
      <h3>{wDetail.name} <span>{wDetail.sys.country}</span></h3>
      <h2>{wDetail.main.temp}<sup>o</sup>Celcius</h2>
      <img src={`https://openweathermap.org/img/w/${wDetail.weather[0].icon}.png`}></img>
      <p>{wDetail.weather[0].description}</p>
      </>
      :
      "No Data Found"
      }
    </div>
    </div>

  );
}

export default App;
