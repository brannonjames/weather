import React from 'react';
import styled from 'styled-components';
import {Size} from "../../types";
import {useCurrentCondition, useCurrentTempature} from "../../hooks/forecast.hooks";
import {ICondition} from "../../services/ForecastService/ForecastService";

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

  return (
    <Container>
      <StyledText style={{ fontSize: conditionFontSize }}>
        { condition.text }
      </StyledText>
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
`;

const StyledText = styled.p`
  margin: 0;
  font-size: 1rem;
`;

