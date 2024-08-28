// src/Weather.js


import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const url = `https://api.weatherapi.com/v1/current.json?key=3b5d35f945e84173ab364648242708&q=${city}&aqi=no`;

  const fetchWeather = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (err) {
      setError('City not found');
      setWeather(null);
      alert('Failed to fetch weather data'); // Alert for failed fetch
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="weather-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit" className="searchButton">Search</button>
      </form>
      {loading && <p>Loading data…</p>}
      {error && <p>{error}</p>}
      {weather && (
        <div className="weather-cards">
          <div className="weather-card">
            <h3>Temperature</h3>
            <p>{weather.current.temp_c}&#8451;</p>
          </div>
          <div className="weather-card">
            <h3>Humidity</h3>
            <p>{weather.current.humidity} %</p>
          </div>
          <div className="weather-card">
            <h3>Condition</h3>
            <p>{weather.current.condition.text}</p>
          </div>
          <div className="weather-card">
            <h3>Wind Speed</h3>
            <p>{weather.current.wind_kph} kph</p>
          </div>
        </div>
      )}
    </div>
  );
};
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Weather.css';

// const Weather = () => {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   //const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
//   let url =`https://api.weatherapi.com/v1/current.json?key=3b5d35f945e84173ab364648242708&q=${city}&aqi=no`

//   const fetchWeather = async () => {
//     setLoading(true);
//     setError('');
//     try {
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       const response = await axios.get(url);
//       setWeather(response.data);
//     } catch (err) {
//       setError('City not found');
//       setWeather(null);
//       alert('Failed to fetch weather data'); // Alert for failed fetch
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchWeather();
//   };

//   return (
//     <div className="weather-container">
//       <form  onSubmit={handleSubmit}>
//         <input 
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter city name"
//         />
//         <button type="submit" className="searchButton">Search</button>
//       </form>
//       {loading && <p>Loading data…</p>}
//       {error && <p>{error}</p>}
//       {weather && (
//         <div className="weather-cards">
//           <div className="weather-card">
//             <h3>Temperature</h3>
//             <p>{weather.current.temp_c}&#8451;</p>
//           </div>
//           <div className="weather-card">
//             <h3>Humidity</h3>
//             <p>{weather.current.humidity} %</p>
//           </div>
//           <div className="weather-card">
//             <h3>Condition</h3>
//             <p>{weather.current.condition.text} </p>
//           </div>
//           <div className="weather-card">
//             <h3>Wind Speed</h3>
//             <p>{weather.current.wind_kph} kph</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

export default Weather;

