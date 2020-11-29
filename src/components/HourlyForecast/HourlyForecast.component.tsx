import React from 'react';
import styled from 'styled-components';
import {useForecast} from "../../hooks/forecast.hooks";
import {useIsMetric} from "../../hooks/settings.hooks";
import WeatherIcon from "../WeatherIcon/WeatherIcon.component";
import ForecastService from "../../services/ForecastService/ForecastService";

// The number of hours to show in the list
// Hours should extend into the next day
const NUM_HOURS = 24;
//
// MAIN COMPONENT
//
const HourlyForecast = () => {
  //
  // const todaysForecast = useTodaysHourlyForecast() || [];
  const [forecast] = useForecast();
  const [isMetric] = useIsMetric();
  //
  if (!forecast || !forecast.forecast.forecastday[0]) {
    return null;
  }
  //
  const now = Date.now() / 1000;
  // Filter out any hours that are in the past
  const todaysForecast = forecast.forecast.forecastday[0].hour.filter(hourForecast => hourForecast.time_epoch > now);
  //
  const numberOfHoursToAppendFromTomorrow = NUM_HOURS - todaysForecast.length;
  const tomorrowsForecasts = forecast.forecast.forecastday[1]?.hour.slice(0, numberOfHoursToAppendFromTomorrow);
  //
  const hourlyForecasts = todaysForecast.concat(tomorrowsForecasts);
  //
  return (
    <HoursList>
      {
        hourlyForecasts
          .map(hourForecast => {
            const {
              temp_f,
              temp_c,
              time_epoch,
              time,
              condition
            } = hourForecast;
            const temp = isMetric ? temp_c : temp_f;
            return (
              <HourForecast key={time_epoch}>
                <div>{convertDatetoAMPM(new Date(time))}</div>
                <WeatherIcon
                  code={ForecastService.getIconCodeFromUrl(condition.icon)}
                  type={ForecastService.getWeatherTypeFromUrl(condition.icon)}
                  description={hourForecast.condition.text}
                />
                <div>{Math.round(temp)}<span>&#176;</span></div>
              </HourForecast>
            )
          })
      }
    </HoursList>
  )
};

export default HourlyForecast;

//
// UTILITIES
//
const convertDatetoAMPM  = (date:  Date) : string => {
  const hours = Number(date.getHours());
  if (hours > 12) {
    return `${hours % 12}PM`;
  }
  if (hours === 0) {
    return '12AM';
  }
  if (hours  === 12) {
    return '12PM';
  }
  return `${hours}PM`;
};

//
// STYLED COMPONENTS
//
const HoursList = styled.ul`
  display: flex;
  width: 100%;
  overflow: auto;
  padding: 24px 0;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  font-weight: bold;
`;

const HourForecast = styled.li`
  min-height: 100px;
  padding-right: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
`;