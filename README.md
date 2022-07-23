# Weather App

A minimalist weather application developed with React.js that allows you to view the weather of your current geolocation as well as any other location in the world using Weatherbit API and Geoapify Address Autocomplete API.

## Live Preview

To see a live version of the app visit: https://tiagowu.github.io/weather-app/

## Screenshots

![weather-app-preview-1](https://github.com/tiagowu/weather-app/blob/main/screenshots/weather-app-preview-1.png)
![weather-app-preview-2](https://github.com/tiagowu/weather-app/blob/main/screenshots/weather-app-preview-2.png)

## Setup

You must have [Node.js](https://nodejs.org/en/) installed.

Clone this repository and cd into the project directory:

    git clone https://github.com/tiagowu/weather-app weather-app
    cd weather-app

Create a file called **.env** containing the following code:

    REACT_APP_WEATHERBIT_API_URL = "https://api.weatherbit.io/v2.0/"
    REACT_APP_WEATHERBIT_API_KEY = "YOUR_WEATHERBIT_API_KEY"
    REACT_APP_GEOAPIFY_API_KEY = "YOUR_GEOAPIFY_API_KEY"

**\*\*Replace YOUR_WEATHERBIT_API_KEY and YOUR_GEOAPIFY_API_KEY obtained from [Weatherbit API](https://www.weatherbit.io/) and [Geoapify API](https://www.geoapify.com/).**

Install required dependencies:

    npm install

Start the server:

    npm start

Open the app in your browser at <http://localhost:3000/>.

## APIs

- [Weatherbit](https://www.weatherbit.io/)
- [Geoapify](https://www.geoapify.com/)

## Dependencies

- [Bootstrap](https://github.com/twbs/bootstrap)
- [React Icons](https://github.com/react-icons/react-icons)
- [Geoapify - Geocoder Autocomplete](https://github.com/geoapify/geocoder-autocomplete)
- [Geoapify - React Geocoder Autocomplete](https://github.com/geoapify/react-geocoder-autocomplete)
