import LocationService from './LocationService';
import {IQueried} from "../AbstractWeatherService";
import {MOCK_LOCATION_DATA} from "./__mocks__/LocationService";
const axios = require('axios');
jest.mock('axios');

describe('LocationService method tests', () => {
  //
  let service: LocationService;
  //
  const parameters: IQueried = {
    q: 'Minneapolis'
  };
  //
  // Setup
  beforeAll(() => {
    service = new LocationService();
  });
  //
  it('Fetch method returns at least one result', async () => {

    axios.get.mockResolvedValue({
      data: MOCK_LOCATION_DATA
    });

    const response = await service.fetch(parameters);
    expect(response).toEqual(MOCK_LOCATION_DATA);
    expect(response[0]).toBeTruthy();
  });
  //
});
