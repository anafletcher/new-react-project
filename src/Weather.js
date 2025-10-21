import React from "react";
import axios from "axios";

export default function Weather(props) {
  function getWeather(response) {
    alert(
      `It is currently ${response.data.weather[0].description} in ${
        props.city
      } and ${Math.round(response.data.main.temp)}C`
    );
  }
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getWeather);

  return <h3>Hello from Weather</h3>;
}
