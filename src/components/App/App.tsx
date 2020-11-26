import React, {useEffect} from 'react';
import styled from 'styled-components';
import LocationDisplay from '../LocationDisplay/LocationDisplay.component';
import {useLocation} from "../../hooks/location.hooks";
import {useForecast} from "../../hooks/forecast.hooks";
import ForecastService from "../../services/ForecastService/ForecastService";
import CurrentWeatherCondition from "../CurrentWeatherCondition/CurrentWeatherCondition.component";

// The number of forecast days is limited by the free tier on weatherapi.com
const FORECAST_DAYS = 3;

//
// MAIN COMPONENT
//
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
    <Main>
      <header>
        <LocationDisplay />
        <CurrentWeatherCondition />
      </header>
    </Main>
  );
}

export default App;

//
// STYLED COMPONENTS
//
const Main = styled.main`
  margin: 0;  
  text-align: center;
  height: 100vh;
  width: calc(100% - 24px);
  color: white;
  padding: 12px;
`;
