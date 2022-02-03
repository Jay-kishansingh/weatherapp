import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const api = {
    key: "059910230f84a12ea9c1dcfe56af9c3c",
    base: "https://api.openweathermap.org/data/2.5/"
  }


  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("18.45");

  function handleChange (event){
    let z = event.target.value
    setCity(z)
  }

  
  function handleTemp(){
    fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`)
    .then(data => data = data.json())
    .then((zq) => {setWeather(zq)})
    console.log(weather.main.temp);
    document.getElementById("myTemp").innerHTML = weather.main.temp;
    
  }

  return (
    <div className="App">
      <div className='weather-app'>
        <input placeholder='Enter City Name ...' value={city} onChange={handleChange}></input>
        <button onClick={handleTemp}>SUBMIT</button>

        <h2 id='myTemp'></h2>
      </div>
    </div>
  );
}

export default App;
