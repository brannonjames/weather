import {ILocation} from "../LocationService";

const mock = jest.fn().mockImplementation(() => ({
  fetch: () => Promise.resolve(MOCK_LOCATION_DATA)
}));

export default mock;

export const MOCK_LOCATION_DATA: ILocation[] = [{
  id: 2599844,
  name: 'Minneapolis, Minnesota, United States of America',
  region: 'Minnesota',
  country: 'United States of America',
  lat: 44.98,
  lon: -93.26,
  url: 'minneapolis-minnesota-united-states-of-america'
}];