import React from 'react';

test('Environment variables exist', () => {
  expect(process.env.REACT_APP_WEATHER_API_KEY).toBeTruthy();
});
