import {IForecast} from "../../services/ForecastService/ForecastService";
import {ForecastActionType} from "./forecast.actions";
import {AnyAction} from "redux";

const initialState: IForecast = {
  current: {
    last_updated_epoch: 0,
    last_updated: '',
    temp_c: 0,
    temp_f: 0,
    is_day: 0,
    condition: {
      text: '',
      icon: '',
      code: 0,
    },
    wind_mph: 0,
    wind_kph: 0,
    wind_degree: 0,
    wind_dir: '',
    pressure_mb: 0,
    pressure_in: 0,
    precip_mm: 0,
    precip_in: 0,
    humidity: 0,
    cloud: 0,
    feelslike_c: 0,
    feelslike_f: 0,
    vis_km: 0,
    vis_miles: 0,
    uv: 0,
    gust_mph: 0,
    gust_kph: 0,
  },
  forecast: {
    forecastday: []
  }
};

const forecastReducer = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case ForecastActionType.SET_FORECAST:
      return payload;
    default:
      return state;
  }
};

export default forecastReducer;