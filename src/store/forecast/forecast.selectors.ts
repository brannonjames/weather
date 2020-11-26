import {IAppState} from "../reducer";
import {ICondition, IForecast} from "../../services/ForecastService/ForecastService";

export const getForecast = (state: IAppState) : IForecast => {
  return state.forecast;
};

export const getCurrentCondition = (state: IAppState) : ICondition => {
  return state.forecast.current.condition;
};

export const getCurrentTempature = (state: IAppState, { isMetric }) : number => {
  return isMetric ? state.forecast.current.temp_c : state.forecast.current.temp_f;
};