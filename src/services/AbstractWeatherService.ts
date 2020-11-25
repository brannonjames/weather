import axios from 'axios';

export default abstract class AbstractWeatherService<R, P> {

  protected API_URL: string = 'http://api.weatherapi.com/v1';
  private API_KEY?: string = process.env.REACT_APP_WEATHER_API_KEY;
  private readonly url: string;

  protected constructor(endpoint: string) {
    this.url = this.API_URL + endpoint;
  }

  // This is the method that will be called for any service using the weather API
  async fetch(params: P) : Promise<R> {
    //
    // make the actual request
    const { data } = await axios.get<R>(this.url, { params: this.getParams(params) });
    //
    return data;
  }

  // merge incoming query params with the api key
  private getParams(params: P) {
    return { ...params, key: this.API_KEY };
  }

}

export interface IQueried {
  q: string
}
