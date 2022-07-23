import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import {
  GeoapifyContext,
  GeoapifyGeocoderAutocomplete,
} from "@geoapify/react-geocoder-autocomplete";
import "./LocationInput.css";

const LocationInput = (props) => {
  const { handleClick, handlePlaceSelect } = props;

  return (
    <div className="input-box">
      <GeoapifyContext apiKey={process.env.REACT_APP_GEOAPIFY_API_KEY}>
        <GeoapifyGeocoderAutocomplete placeSelect={handlePlaceSelect} skipIcons={true} />
      </GeoapifyContext>
      <button className="btn-location" onClick={handleClick}>
        <div>Use Current Location</div>
        <FaLocationArrow></FaLocationArrow>
      </button>
    </div>
  );
};

export default LocationInput;
