import React from 'react';
import styled from 'styled-components';
import icons, {WeatherType} from '../../assets/icons';

//
// MAIN COMPONENT
//
const WeatherIcon = (props: IWeatherIconProps) => {
  const { code, type, style, description } = props;
  const icon = icons[type][code];
  return (
    <StyledImage
      src={icon}
      alt={description}
      style={style}
    />
  )
};

export default WeatherIcon;

//
// PROP TYPES
//
interface IWeatherIconProps {
  code: string | number
  type: WeatherType
  description: string
  style?: object
}

//
// STYLED
//
const StyledImage = styled.img`
  height: 44px;
  width: 44px;
`;
