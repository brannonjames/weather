import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import LocationDisplay from '../LocationDisplay/LocationDisplay.component';
import './App.css';
import {useLocation} from "../../hooks/location.hooks";
import {useForecast} from "../../hooks/forecast.hooks";
import ForecastService from "../../services/ForecastService/ForecastService";

// The number of forecast days is limited by the free tier on weatherapi.com
const FORECAST_DAYS = 3;

function App() {

  const [location] = useLocation();
  const [, setForecast] = useForecast();

  useEffect(() => {
    if (location.url) {
      ForecastService.instance.fetch({ q: location.url, days: FORECAST_DAYS })
        .then(setForecast)
        .catch(console.error);
    }
  }, [location.url]);

  return (
    <div className="App">
      <header className="App-header">
        <LocationDisplay />
      </header>
    </div>
  );
}

export default App;
