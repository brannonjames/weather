import ForecastService, { IRequestParams } from './ForecastService';
import {WeatherType} from "../../assets/icons";

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
  describe('URL parsers', () => {
    //
    it('returns the correct icon code for the given url', () => {
      //
      const url1 = '//cdn.weatherapi.com/weather/64x64/night/116.png';
      expect(ForecastService.getIconCodeFromUrl(url1)).toEqual('116');
      //
      const url2 = 'invalid url';
      expect(() => ForecastService.getIconCodeFromUrl(url2)).toThrowError();
    });
    //
    it('returns the correct weather type for the given url', () => {
      //
      const url1 = '//cdn.weatherapi.com/weather/64x64/night/116.png';
      expect(ForecastService.getWeatherTypeFromUrl(url1)).toEqual(WeatherType.NIGHT);
      //
      const url2 = '//cdn.weatherapi.com/weather/64x64/day/116.png';
      expect(ForecastService.getWeatherTypeFromUrl(url2)).toEqual(WeatherType.DAY);
      //
      const url3 = 'invalid url';
      expect(() => ForecastService.getWeatherTypeFromUrl(url3)).toThrowError();
    });
  });

});