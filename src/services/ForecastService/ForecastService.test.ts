import ForecastService, { IRequestParams } from './ForecastService';

describe('ForcastService method tests', () => {
  //
  let service: ForecastService;
  //
  const parameters: IRequestParams = {
    q: '55413',
    // 3 days is the max allowed for free tier
    days:  3
  };
  //
  // Setup
  beforeAll(() => {
    service = new ForecastService();
  });
  //
  it('Fetch method returns the correct number of days', async () => {
    const response = await service.fetch(parameters);
    expect(response).toBeTruthy();
    expect(response.forecast.forecastday.length).toEqual(3);
  });
  //
});