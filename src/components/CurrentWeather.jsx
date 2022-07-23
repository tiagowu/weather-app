import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = (props) => {
  const { weather, name } = props;
  const data = weather.data[0];

  return typeof weather !== "undefined" ? (
    <div className="weather-box-container">
      <div className="left-weather-box">
        <img
          className="weather-icon"
          src={require("../icons/" + data.weather.icon + ".png")}
          alt="weather-icon"
        />
        <div className="temp">{Math.round(data.temp)}°F</div>
        <div className="weather-info">
          <div>Humidity: {Math.round(data.rh)}%</div>
          <div>
            Wind: {data.wind_cdir} {Math.round(data.wind_spd)} mph
          </div>
          <div>Clouds: {Math.round(data.clouds)}%</div>
        </div>
      </div>
      <div className="right-weather-box">
        <div className="location">
          {name ? <div>{name}</div> : <div className="city">{data.city_name}</div>}
        </div>
        <div className="date">{new Date().toDateString()}</div>
      </div>
    </div>
  ) : null;
};

export default CurrentWeather;
