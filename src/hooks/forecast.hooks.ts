import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {StateHookTuple} from "./index";
import {IForecast} from "../services/ForecastService/ForecastService";
import {getForecast} from "../store/forecast/forecast.selectors";
import {setForecast} from "../store/forecast/forecast.actions";

export const useForecast = () : StateHookTuple<IForecast> => {
  const dispatch = useDispatch();
  const forecast = useSelector(getForecast);
  return [forecast, (f) => dispatch(setForecast(f))];
};