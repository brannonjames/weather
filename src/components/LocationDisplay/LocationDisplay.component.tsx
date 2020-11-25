import React, { useState, useEffect } from 'react';
import {useLocation} from "../../hooks/location.hooks";
import LocationService, {ILocation} from '../../services/LocationService/LocationService';

const LocationDisplay = () => {
  //
  // Initial state setup
  const [location, setLocation] = useLocation();
  const cityName = location.name;
  const [inputValue, setInputValue] = useState<string>('');
  // the auto-complete search results
  const [searchSuggestions, setSearchSuggestions] = useState<ILocation[]>([]);

  console.log(location, cityName);

  useEffect(() => {
    setInputValue(cityName);
  }, [cityName]);

  useEffect(() => {
    // When clearing the input or auto-populating the input with the selected city, don't fetch suggestions
    if (inputValue && inputValue !== cityName) {
      LocationService.instance.fetch({ q: inputValue })
        .then(setSearchSuggestions)
        .catch(console.error);
    }
  }, [inputValue]);

  const handleLocationClick = location => e => {
    e.preventDefault();
    // set the actual location in redux
    setLocation(location);
    //
    // clear the suggestions, don't care about these anymore
    setSearchSuggestions([]);

  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      {
        searchSuggestions.map((location: ILocation) => {
          return <a href="#" onClick={handleLocationClick(location)} key={location.id}>{`${location.name}`}</a>
        })
      }
    </div>
  )

};

export default LocationDisplay;