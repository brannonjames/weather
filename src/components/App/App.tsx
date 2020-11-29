import React, {useEffect} from 'react';
import styled from 'styled-components';
import LocationDisplay from '../LocationDisplay/LocationDisplay.component';
import {useLocation} from "../../hooks/location.hooks";
import {useForecast, useIsDay} from "../../hooks/forecast.hooks";
import ForecastService from "../../services/ForecastService/ForecastService";
import CurrentWeatherCondition from "../CurrentWeatherCondition/CurrentWeatherCondition.component";
import HourlyForecast from '../HourlyForecast/HourlyForecast.component';
import DailyForecast from '../DailyForecast/DailyForecast.component'

// The number of forecast days is limited by the free tier on weatherapi.com
const FORECAST_DAYS = 3;

//
// MAIN COMPONENT
//
function App() {

  const [location] = useLocation();
  const [, setForecast] = useForecast();
  const isDay = useIsDay();

  useEffect(() => {
    // make the background darker at nightime
    if (!isDay) {
      const body = document.querySelector('body');
      if (body) {
        body.style.backgroundColor = '#162d70';
      }
    }
  }, [isDay]);

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
        <HourlyForecast />
        <DailyForecast />
      </header>
    </Main>
  );
}

export default App;

//
// STYLED COMPONENTS
//
const Main = styled.div`
  margin: 0 auto;  
  text-align: center;
  height: 100vh;
  width: calc(100% - 24px);
  color: white;
  padding: 12px;
  max-width: 900px;
`;
