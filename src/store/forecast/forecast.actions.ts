import {IForecast} from "../../services/ForecastService/ForecastService";

//
//  ACTION TYPES
//
export enum ForecastActionType {
  SET_FORECAST = 'SET_FORECAST'
}


//
// ACTIONS
//
export interface ForecastAction<P> {
  type: ForecastActionType
  payload: P
}

export const setForecast = (forecast: IForecast) : ForecastAction<IForecast> => ({
  type: ForecastActionType.SET_FORECAST,
  payload: forecast
});