import AbstractWeatherService, {IQueried} from "../AbstractWeatherService";

export default class LocationService extends AbstractWeatherService<ILocation[], IQueried> {

  // set singleton
  static instance = new LocationService();

   constructor() {
    //
    const locationEndpoint = '/search.json';
    //
    // set http://api.weatherapi.com/v1/search.json as the endpoint
    super(locationEndpoint);

  }

  static getCityName(location: ILocation) : string {
    return location.name.split(',')[0];
  }

  static getStateName(location: ILocation) : string {
    return location.region;
  }

}

export interface ILocation {
  id: number
  name: string
  region: string
  country: string,
  lat: number
  lon: number
  url: string
}