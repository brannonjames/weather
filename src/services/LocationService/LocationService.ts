import AbstractWeatherService, {IQueried} from "../AbstractWeatherService";

export default class LocationService extends AbstractWeatherService<ILocationResponse[], IQueried> {

   constructor() {
    //
    const locationEndpoint = '/search.json';
    //
    // set http://api.weatherapi.com/v1/search.json as the endpoint
    super(locationEndpoint);
  }

}

export interface ILocationResponse {
  id: number
  name: string
  region: string
  country: string,
  lat: number
  lon: number
  url: string
}