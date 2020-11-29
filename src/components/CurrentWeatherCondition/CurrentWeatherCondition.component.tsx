import React from 'react';
import styled from 'styled-components';
import {Size} from "../../types";
import {useCurrentCondition, useCurrentTempature} from "../../hooks/forecast.hooks";
import ForecastService, {ICondition} from "../../services/ForecastService/ForecastService";
import WeatherIcon from "../WeatherIcon/WeatherIcon.component";

//
// MAIN COMPONENT
//
const CurrentWeatherCondition = (props: IProps) => {
  const { size = Size.DEFAULT } = props;
  //
  // cloudy, sunny, overcast, etc...
  const condition: ICondition = useCurrentCondition();
  const conditionFontSize = CONDITION_FONT_SIZES[size];
  //
  const temperature = useCurrentTempature();
  const temperatureFontSize = TEMPERATURE_FONT_SIZES[size];

  if (!condition.icon || !condition.text) {
    return null;
  }

  return (
    <Container>
      <Condition>
        <WeatherIcon
          style={{ height: 80, width: 80 }}
          code={ForecastService.getIconCodeFromUrl(condition.icon)}
          type={ForecastService.getWeatherTypeFromUrl(condition.icon)}
          description={condition.text}
        />
        <StyledText style={{ fontSize: conditionFontSize }}>
          { condition.text }
        </StyledText>
      </Condition>
      <StyledText style={{ fontSize: temperatureFontSize }}>
        <span>{ Math.round(Number(temperature)) }</span>
        <span>&#176;</span>
      </StyledText>
    </Container>
  )
};

export default CurrentWeatherCondition;

//
// TYPES
//
interface IProps {
  size?: Size
}

//
// UTILITIES
//
const CONDITION_FONT_SIZES = {
  [Size.DEFAULT]: '1.2rem',
  [Size.LARGE]: '1.8rem',
};

const TEMPERATURE_FONT_SIZES = {
  [Size.DEFAULT]: '6rem',
  [Size.LARGE]: '8rem',
};

//
// STYLED COMPONENTS
//
const Container = styled.div`
  padding: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  margin: 0 auto;
  flex-wrap: wrap;
  align-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Condition = styled.div``;

const StyledText = styled.p`
  font-size: 1rem;
`;

