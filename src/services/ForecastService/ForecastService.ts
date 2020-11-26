import AbstractWeatherService, {IQueried} from '../AbstractWeatherService';
import {WeatherType} from "../../assets/icons";

export default class ForecastService extends AbstractWeatherService<IForecast, IRequestParams> {

  // set singleton
  static instance = new ForecastService();

  constructor() {
    //
    const locationEndpoint = '/forecast.json.json';
    //
    // set http://api.weatherapi.com/v1/search.json as the endpoint
    super(locationEndpoint);

  }

  /**
   * @param url - the URL for the icon in weather conditions
   * @returns returns the first matching 3 digit number, in this cast the icon code
   */
  static getIconCodeFromUrl = (url: string) : string  => {
    const result = url.match(/[0-9][0-9][0-9]/) || [];
    if (!result[0]) {
      throw new Error('No icon code match for URL: ' + url);
    }
    return result[0] || '';
  };

  /**
   * @param url - the URL for the icon in weather conditions
   * @returns returns a {WeatherType} ('day' or 'night')
   */
  static getWeatherTypeFromUrl = (url: string) : WeatherType => {
    const result = url.match(/day|night/) || [];
    if (!result[0]) {
      throw new Error('No WeatherType match for URL: ' + url);
    }
    return result[0] === 'day' ? WeatherType.DAY : WeatherType.NIGHT;
  }

}

export interface ICurrent {
  last_updated_epoch: number
  last_updated: string
  temp_c: number
  temp_f: number
  is_day: number
  condition: ICondition
  wind_mph: number
  wind_kph: number
  wind_degree: number
  wind_dir: string,
  pressure_mb: number
  pressure_in: number
  precip_mm: number
  precip_in: number
  humidity: number
  cloud: number
  feelslike_c: number
  feelslike_f: number
  vis_km: number
  vis_miles: number
  uv: number
  gust_mph: number
  gust_kph: number
}

export interface IForecastHour {
  time_epoch: number
  time: string
  temp_c: number
  temp_f: number
  is_day: number
  condition: ICondition
  wind_mph: number
  wind_kph: number
  wind_degree: number
  wind_dir: string,
  pressure_mb: number
  pressure_in: number
  precip_mm: number
  precip_in: number
  humidity: number
  cloud: number
  feelslike_c: number
  feelslike_f: number
  windchill_c: number
  windchill_f: number
  heatindex_c: number
  heatindex_f: number
  dewpoint_c: number
  dewpoint_f: number
  will_it_rain: number
  chance_of_rain: number
  will_it_snow: number
  chance_of_snow: number
  vis_km: number
  vis_miles: number
  gust_mph: number
  gust_kph: number
}

export interface ICondition {
  text: string
  icon: string
  code: number
}

export interface IForecastDay {
  date: string
  date_epoch: number
  day: {
    maxtemp_c: number
    maxtemp_f: number
    mintemp_c: number
    mintemp_f: number
    avgtemp_c: number
    avgtemp_f: number
    maxwind_mph: number
    maxwind_kph: number
    totalprecip_mm: number
    totalprecip_in: number
    avgvis_km: number
    avgvis_miles: number
    avghumidity: number
    daily_will_it_rain: number
    daily_chance_of_rain: number
    daily_will_it_snow: number
    daily_chance_of_snow: number
    condition: ICondition
    uv: number
  }
  astro: {
    sunrise: string
    sunset: string
    moonrise: string
    moonset: string
    moon_phase: string
    moon_illumination: number
  }
  hour: IForecastHour[]
}

export interface IForecast {
  current: ICurrent
  forecast: {
    forecastday: IForecastDay[]
  }
}
        
export interface IRequestParams extends IQueried {
  days: number
}