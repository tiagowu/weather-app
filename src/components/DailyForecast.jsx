import React from "react";
import { BsDropletFill } from "react-icons/bs";
import "./DailyForecast.css";

const DailyForecast = (props) => {
  const { forecast } = props;

  return typeof forecast !== "undefined" ? (
    <div className="forecast-box-container">
      <div className="forecast-box">
        {forecast.data.map((weather, index) => (
          <div className="daily-box" key={index}>
            <div className="date">
              {new Date().toDateString() ===
              new Date(weather.datetime + "T00:00:00").toDateString() ? (
                "Today"
              ) : (
                <div>{new Date(weather.datetime + "T00:00:00").toDateString().slice(0, 10)}</div>
              )}
            </div>
            <div className="icon-box">
              <img
                className="weather-icon"
                src={require("../icons/" + weather.weather.icon + ".png")}
                alt="weather-icon"
              />
              <div className="precip">
                <BsDropletFill className="icon"></BsDropletFill>
                {weather.pop}%
              </div>
            </div>
            <div className="temps">
              <span className="hi-temp">{Math.round(weather.high_temp)}</span>
              <span className="lo-temp">{Math.round(weather.low_temp)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default DailyForecast;
