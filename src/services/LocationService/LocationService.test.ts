import LocationService from './LocationService';
import {IQueried} from "../AbstractWeatherService";


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
    const response = await service.fetch(parameters);
    expect(response.length).toBeGreaterThan(0);
  });
  //
});
