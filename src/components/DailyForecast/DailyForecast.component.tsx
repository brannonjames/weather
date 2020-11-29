import React from 'react';
import styled from 'styled-components';
import {useForecast} from "../../hooks/forecast.hooks";
import DateService from "../../services/DateService/DateService";
import WeatherIcon from "../WeatherIcon/WeatherIcon.component";
import ForecastService from "../../services/ForecastService/ForecastService";
import {useIsMetric} from "../../hooks/settings.hooks";

//
// MAIN COMPONENT
//
const DailyForecast = () => {
  //
  const [forecast] = useForecast();
  const [isMetric] = useIsMetric();
  //
  if (forecast.forecast.forecastday.length === 0) {
    return null;
  }
  //
  return (
    <DailyForecastList>
      {
        forecast.forecast.forecastday.map((forecastday, i) => {
          const { day, date_epoch, date } = forecastday;
          const min = Math.round(isMetric ? day.mintemp_c : day.mintemp_f);
          const max = Math.round(isMetric ? day.maxtemp_c : day.maxtemp_f);
          return (
            <Day key={date_epoch}>
              <DayName>
                {
                  i === 0
                  ? 'Today'
                  :  DateService.convertDateStrToDayofWeek(date)
                }
              </DayName>
              <WeatherIcon
                code={ForecastService.getIconCodeFromUrl(day.condition.icon)}
                type={ForecastService.getWeatherTypeFromUrl(day.condition.icon)}
                description={day.condition.text}
              />
              <Tempatures>
                <MaxTemp>{max}<span>&#176;</span></MaxTemp>
                <MinTemp>{min}<span>&#176;</span></MinTemp>
              </Tempatures>
            </Day>
          )
        })
      }
    </DailyForecastList>
  )
};

//
// STYLED COMPONENT
//
export default DailyForecast;

const DailyForecastList = styled.ul`
  border-bottom: 1px solid white;
  max-width: 580px;
  margin: 0 auto;
`;

const Day = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  font-weight: bold;
`;

const DayName = styled.div`
  width: 33%;
  text-align: left;
`;

const Tempatures = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0;
  width: 33%;
`;

const MaxTemp = styled.p``;

const MinTemp = styled.p`
  opacity: 0.6;
  margin-left: 12px;
`;
