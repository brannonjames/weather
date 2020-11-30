import React from 'react';
import styled from 'styled-components';
import {useIsMetric} from "../../hooks/settings.hooks";
import {useLocation} from "../../hooks/location.hooks";

//
// MAIN COMPONENT
//
const UnitSelector = () => {
  //
  const [location] = useLocation();
  const [isMetric, setIsMetric] = useIsMetric();
  //
  // the app kinda looks weird with the F/C selector when there's no selected city
  if (!location.id) {
    return null;
  }
  //
  return (
    <Container>
      <TempUnitButton
        style={{ opacity: isMetric ? 0.6 : 1 }}
        onClick={() => setIsMetric(false)}
      >
        F&#176;
      </TempUnitButton>

      <span>/</span>

      <TempUnitButton
        style={{ opacity: isMetric ? 1 : 0.6 }}
        onClick={() => setIsMetric(true)}
      >
        C&#176;
      </TempUnitButton>
    </Container>
  )
};

export default UnitSelector;

//
// STYLED COMPONENTS
//
const Container = styled.div`
  font-size: 1.4rem;
  margin: 12px 0;
`;

const TempUnitButton = styled.button`
  font-size: 1.4rem;
  color: white;
  background-color: transparent;
  border: none;
  font-weight: bold;  
`;