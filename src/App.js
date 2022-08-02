import React, { useState, useEffect } from "react";
import LocationInput from "./components/LocationInput";
import CurrentWeather from "./components/CurrentWeather";
import DailyForecast from "./components/DailyForecast";
import "./App.css";

function App() {
  const [name, setName] = useState(null);
  const [location, setLocation] = useState({
    lat: null,
    long: null,
  });
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const loadInfo = () => {
    const fetchData = async () => {
      Promise.all([
        fetch(
          `${process.env.REACT_APP_WEATHERBIT_API_URL}current?&lat=${location.lat}&lon=${location.long}&units=I&key=${process.env.REACT_APP_WEATHERBIT_API_KEY}`
        ),
        fetch(
          `${process.env.REACT_APP_WEATHERBIT_API_URL}forecast/daily?&lat=${location.lat}&lon=${location.long}&days=5&units=I&key=${process.env.REACT_APP_WEATHERBIT_API_KEY}`
        ),
      ])
        .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
        .then(([data1, data2]) => {
          setWeather(data1);
          setForecast(data2);
        });
    };
    if (location.lat && location.long) {
      fetchData();
    }
  };

  useEffect(() => {
    if (location.lat && location.long) {
      loadInfo();
    }
  }, [location.lat, location.long]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLocation({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
        setName(null);
        console.log("Point:" + position.coords.latitude + ", " + position.coords.longitude);
      });
    }
  };

  const handlePlaceSelect = (value) => {
    if (value) {
      const data = value.properties;
      if (data.lat !== undefined && data.lon !== undefined) {
        setLocation({ lat: data.lat, long: data.lon });
        if (data.formatted !== undefined) setName(data.formatted);
      } else
        setLocation({
          lat: value.geometry.coordinates[1],
          long: value.geometry.coordinates[0],
        });
    }
  };

  return (
    <main>
      <LocationInput handleClick={handleClick} handlePlaceSelect={handlePlaceSelect} />
      {weather && <CurrentWeather name={name} weather={weather} />}
      {forecast && <DailyForecast forecast={forecast} />}
    </main>
  );
}

export default App;
