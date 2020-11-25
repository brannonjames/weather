import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import {useLocation} from "../../hooks/location.hooks";
import LocationService, {ILocation} from '../../services/LocationService/LocationService';

//
// MAIN COMPONENT
//
const LocationDisplay = () => {
  //
  // Initial state setup
  const [location, setLocation] = useLocation();
  const cityName = LocationService.getCityName(location);
  const [inputValue, setInputValue] = useState<string>('');
  // the auto-complete search results
  const [searchSuggestions, setSearchSuggestions] = useState<ILocation[]>([]);
  //
  // auto-populates the input with the full name when selecting a suggestion
  useEffect(() => {
    setInputValue(cityName);
  }, [cityName]);
  //
  useEffect(() => {
    // When clearing the input or auto-populating the input with the selected city, don't fetch suggestions
    if (inputValue && inputValue !== cityName) {
      LocationService.instance.fetch({ q: inputValue })
        .then(setSearchSuggestions)
        .catch(console.error);
    }
  }, [inputValue]);
  //
  const handleLocationClick = location => e => {
    e.preventDefault();
    // set the actual location in redux
    setLocation(location);
    //
    // clear the suggestions, don't care about these anymore
    setSearchSuggestions([]);

  };
  //
  return (
    <Container>
      <DisplayInput
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      {
        searchSuggestions.length > 0 && (
          <SuggestionList>
            {
              searchSuggestions.map((location: ILocation) => {
                const title = `${LocationService.getCityName(location)}, ${LocationService.getStateName(location)}`;
                return (
                  <Suggestion key={location.id}>
                    <a href="#" onClick={handleLocationClick(location)}>{title}</a>
                  </Suggestion>
                )
              })
            }
          </SuggestionList>
        )
      }
    </Container>
  )

};

export default LocationDisplay;

// STYLED COMPONENTS
const Container = styled.div`
  position: relative;
`;

const DisplayInput = styled.input`
  width: calc(100% - 12px);
  padding: 6px;
  font-size: 2.4rem;
  text-align: center;
  background-color: transparent;
  color: white;
  border: none;
  &:focus {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const SuggestionList = styled.ul`
  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0; 
  font-size: 1.1rem;
  padding: 12px 0 0 0;
  margin: 0;
  background-color: rgba(255, 255, 255, 0.2);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const Suggestion = styled.li`
   padding-bottom: 12px;
   & > a {
    color: white;
    text-decoration: none;
    display: block;
   }
`;