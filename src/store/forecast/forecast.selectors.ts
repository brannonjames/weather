import {IAppState} from "../reducer";
import {IForecast} from "../../services/ForecastService/ForecastService";

export const getForecast = (state: IAppState) : IForecast => {
  return state.forecast;
};