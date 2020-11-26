import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {StateHookTuple} from "./index";
import {ICondition, IForecast} from "../services/ForecastService/ForecastService";
import {getCurrentCondition, getCurrentTempature, getForecast} from "../store/forecast/forecast.selectors";
import {setForecast} from "../store/forecast/forecast.actions";
import {getIsMetric} from "../store/settings/settings.selectors";

// hook that acts as sort of middleman between React and Redux
export const useForecast = () : StateHookTuple<IForecast> => {
  const dispatch = useDispatch();
  const forecast = useSelector(getForecast);
  return [forecast, (f) => dispatch(setForecast(f))];
};

export const useCurrentCondition = () : ICondition => {
  return useSelector(getCurrentCondition);
};

export const useCurrentTempature = () : string => {
  const isMetric = useSelector(getIsMetric);
  return useSelector(state => getCurrentTempature(state, { isMetric }));
};