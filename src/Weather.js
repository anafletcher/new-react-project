import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function upadteCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="WeatherForm" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city..."
            onChange={upadteCity}
          />
        </div>
        <div className="col-3">
          <input type="submit" value="search" />
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className="WeatherDisplay">
        {form}

        <h2>{city}</h2>
        <ul>
          <li>Monday 4th November 2025 10:45am</li>
          <li>Current Weather: {weather.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weather.icon} alt="weather icon" />
            {weather.temperature}°C
          </div>
          <div className="col-6">
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind Speed: {weather.wind}m/s</li>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
